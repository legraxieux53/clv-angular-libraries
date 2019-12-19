import {ClvRequestSender} from '../http/clv-request-sender';
import {Input, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ClvRequest} from '../http/clv-request';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {ClvStatusMessageManager} from '../comunication/clv-status-message-manager';
import {ClvMessageManager} from '../comunication/clv-message-manager';
import {ClvRequestType} from '../http/clv-request-type';
import {ClvRequestMethod} from '../http/clv-request-method';
import {ClvStatusMessage} from '../comunication/clv-status-message';
import {ClvMessageType} from '../comunication/clv-message-type';
import {ClvFormStringStatus} from './clv-form-string-status';
import {ClvInputObservation} from './clv-input-observation';
import {ClvTsUtilsCommonsJs} from 'clv-ts-utils';
import {ClvMessageShower} from '../comunication/clv-message-shower';
import {Autowired} from '@angular-ru/autowired';

// @dynamic
export class ClvReactiveForm extends ClvRequestSender implements OnInit {
  public formGroup: FormGroup;
  private _defaultObject: any;
  private _formData: any;
  private _requestReader: ClvRequest;
  private _requestWritter: ClvRequest;
  private _statusMessageManager: ClvStatusMessageManager;
  private _messageManager: ClvMessageManager;
  private _inputObservation: ClvInputObservation[];
  private _inputsNumbers: AbstractControl[];
  private _afterCannotSendShower: ClvMessageShower;
  private _afterErrorShower: ClvMessageShower;
  private _afterError200Shower: ClvMessageShower;
  private _afterSuccessShower: ClvMessageShower;
  // tslint:disable-next-line:no-input-rename
  @Input('submitted') submitted = false;
  @Autowired() httpClient: HttpClient;

  constructor() {
    super(new ClvRequest('', undefined));
    this._requestReader = new ClvRequest('', undefined);
    this.requestReader.requestType = ClvRequestType.READER;
    this.requestReader.method = ClvRequestMethod.GET;
    this._requestWritter = new ClvRequest('', undefined);
    this.requestWritter.requestType = ClvRequestType.WRITTER;
    this.requestWritter.method = ClvRequestMethod.POST;
    this._defaultObject = {};
    this.formGroup = new FormGroup({});
    this._inputsNumbers = [];
    this._inputObservation = [];
    this._statusMessageManager = new ClvStatusMessageManager();
    this.statusMessageManager.messages = [
      new ClvStatusMessage('Success', 'Operation is success', ClvMessageType.SUCCESS, 200),
      new ClvStatusMessage('Error', 'Check your connexion', ClvMessageType.ERROR, 0),
      new ClvStatusMessage('Error', 'Bad Request', ClvMessageType.ERROR, 400),
      new ClvStatusMessage('Error', 'Ressource not found', ClvMessageType.ERROR, 404),
      new ClvStatusMessage('Error', 'Internal server error', ClvMessageType.ERROR, 500),
      new ClvStatusMessage('Error', 'Logical Error', ClvMessageType.ERROR, ClvFormStringStatus.ERROR_200),
      new ClvStatusMessage('Warning', 'Invalid Form', ClvMessageType.WARNING, ClvFormStringStatus.INVALID_FORM),
      new ClvStatusMessage('Error', 'Invalid Login or Password', ClvMessageType.ERROR, ClvFormStringStatus.INVALID_LOGIN_OR_PASSWORD),
      new ClvStatusMessage('Unknow Error', 'Check your connexion', ClvMessageType.ERROR, ClvFormStringStatus.UNKNOW_ERROR),
    ];
  }

  public static objectToReactiveForm(obj: any, defaultArrayName: string = 'arrayName'): AbstractControl {
    const formGroup: FormGroup = new FormGroup({});
    if (ClvTsUtilsCommonsJs.jsType(obj) === 'array') {
      this.formBuildingEngine(defaultArrayName, obj, formGroup);
    } else {
      this.formBuildingEngine(null, obj, formGroup);
    }
    return formGroup;
  }
  private static formBuildingEngine(key: any, obj: any, control: AbstractControl): void {
    switch (ClvTsUtilsCommonsJs.jsType(obj)) {
      case 'array':
        this.arrayFieldBuilderEngine(key, obj, control);
        break;

      case 'object':
        this.objectFieldBuilderEngine(key, obj, control);
        break;

      default:
        (<FormGroup> control).setControl(key, new FormControl(obj));
    }
  }
  private static objectFieldBuilderEngine(key: any, obj: any, control: AbstractControl) {
    if (key === null) {
      Object.keys(obj).map(ke => {
        this.formBuildingEngine(ke, obj[ke], control);
      });
    } else {
      const formGroup: FormGroup = new FormGroup({});
      (<FormGroup> control).setControl(key, formGroup);
      Object.keys(obj).map(ke => {
        this.formBuildingEngine(ke, obj[ke], formGroup);
      });
    }
  }
  private static arrayFieldBuilderEngine(key: any, obj: any, control: AbstractControl) {
    const array = new FormArray([]);
    (<FormGroup> control).setControl(key, array);
    if (ClvTsUtilsCommonsJs.jsType(obj) === 'array') {
      obj.map(k => {
        const formGroup: FormGroup = new FormGroup({});
        array.push(formGroup);
        this.formBuildingEngine(null, k, formGroup);
      });
    }
  }

  ngOnInit(): void {
    this.formGroup = <FormGroup> ClvReactiveForm.objectToReactiveForm(this.defaultObject);
  }

  get afterCannotSendShower(): ClvMessageShower {
    return this._afterCannotSendShower;
  }

  set afterCannotSendShower(value: ClvMessageShower) {
    this._afterCannotSendShower = value;
  }

  get afterErrorShower(): ClvMessageShower {
    return this._afterErrorShower;
  }

  set afterErrorShower(value: ClvMessageShower) {
    this._afterErrorShower = value;
  }

  get afterError200Shower(): ClvMessageShower {
    return this._afterError200Shower;
  }

  set afterError200Shower(value: ClvMessageShower) {
    this._afterError200Shower = value;
  }

  get afterSuccessShower(): ClvMessageShower {
    return this._afterSuccessShower;
  }

  set afterSuccessShower(value: ClvMessageShower) {
    this._afterSuccessShower = value;
  }

  get inputObservation(): ClvInputObservation[] {
    return this._inputObservation;
  }
  set inputObservation(value: ClvInputObservation[]) {
    this._inputObservation = value;
  }

  get inputsNumbers(): AbstractControl[] {
    return this._inputsNumbers;
  }
  set inputsNumbers(value: AbstractControl[]) {
    this._inputsNumbers = value;
  }

  get defaultObject(): any {
    return this._defaultObject;
  }
  set defaultObject(value: any) {
    this._defaultObject = JSON.parse(JSON.stringify(value));
  }

  get statusMessageManager(): ClvStatusMessageManager {
    return this._statusMessageManager;
  }
  set statusMessageManager(value: ClvStatusMessageManager) {
    this._statusMessageManager = value;
  }

  public canSend() {
    return this.formGroup.valid && !this.sending;
  }

  get formData(): any {
    return this._formData;
  }
  set formData(value: any) {
    this._formData = value;
  }

  get requestReader(): ClvRequest {
    return this._requestReader;
  }
  set requestReader(value: ClvRequest) {
    this._requestReader = value;
  }
  get requestWritter(): ClvRequest {
    return this._requestWritter;
  }
  set requestWritter(value: ClvRequest) {
    this._requestWritter = value; //
  }

  private resolveInputsObservations() {
    this.inputObservation.map((input) => {
      input.source.setValue(input.target.value);
    });
  }
  private resolveInputsNumbers() {
    this.inputsNumbers.map((field) => {
      field.setValue(+ClvTsUtilsCommonsJs.cleanSpace(field.value));
    });
  }

  public setFormDataByResponse(response: HttpResponse<any>) {
    this.formData = response.body;
  }

  public sendForm() {
    this.submitted = true;
    this.resolveInputsNumbers();
    this.resolveInputsObservations();
    if (this.canSend()) {
      this.request = this.requestWritter;
      this.beforeSending(this.requestWritter);
      this.dataToSend(this.request);
      this.sendRequest().subscribe(response => {
        this.requestWritter.response = response;
        this.setFormDataByResponse(response);
        this.afterSending(this.requestWritter, response);
      });
    } else {
      this.afterCannotSend();
    }
  }

  public dataToSend(request: ClvRequest) {
    request.data = Object.assign({}, this.formGroup.value);
  }

  public addToFormArray(array: AbstractControl, value: any, reset: boolean = false) {
    const group = ClvReactiveForm.objectToReactiveForm(JSON.parse(JSON.stringify(value)));
    if (reset) {
      group.reset();
    }
    (<FormArray> array).push(group);
  }
  public removeFromFormArrayAt(array: AbstractControl, index: number) {
    (<FormArray> array).removeAt(index);
  }

  public afterSuccess(request: ClvRequest, response: HttpResponse<any>) {
    super.afterSuccess(request, response);
    try {
      this.afterSuccessShower.message = ClvStatusMessage.findByStatusCode(this.statusMessageManager.messages, response.status);
      if (request.requestType === ClvRequestType.WRITTER) {
        this.afterSuccessShower.show();
      }
    } catch (e) {
    }
  }
  public afterError200(request: ClvRequest, error: HttpResponse<any>) {
    super.afterError200(request, error);
    try {
      this.afterError200Shower.message =
        ClvStatusMessage.findByStatusCode(this.statusMessageManager.messages, ClvFormStringStatus.ERROR_200);
      /*this.afterError200Shower.actionsManager.actions = [
        new ClvPromptAction(true, 'Close', ClvPromptActionPriority.HIGHT)
      ];*/
      if (this.request.requestType === ClvRequestType.WRITTER) {
        this.afterError200Shower.show();
      }
    } catch (e) {}
  }
  public afterCannotSend() {
    super.afterCannotSend();
    this.afterCannotSendShower.message =
      ClvStatusMessage.findByStatusCode(this.statusMessageManager.messages, ClvFormStringStatus.INVALID_FORM);
    this.afterCannotSendShower.show();
  }
  public afterError(request: ClvRequest, error: HttpErrorResponse) {
    super.afterError(request, error);
    try {
      this.afterErrorShower.message = ClvStatusMessage.findByStatusCode(this.statusMessageManager.messages, error.status);
    } catch (e) {
      this.afterErrorShower.message =
        ClvStatusMessage.findByStatusCode(this.statusMessageManager.messages, ClvFormStringStatus.UNKNOW_ERROR);
    }
    try {
      if (request.requestType === ClvRequestType.WRITTER) {
        this.afterErrorShower.show();
      }
    } catch (e) {}
  }
}
