import {Component, OnInit} from '@angular/core';
import {ClvConfirmPrimeNgShower, ClvInputObservation, ClvReactiveForm, ClvRequestMethod} from 'clv-angular-boot';
import {HttpClient} from '@angular/common/http';
import {PersonneModel} from '../models/personne.model';
import {AdresseModel} from '../models/adresse.model';
import {PaysModel} from '../models/pays.model';
import {AbstractControl, FormArray, FormControl} from '@angular/forms';
import {TelephoneModel} from '../models/telephone.model';
import {ToastrService} from 'ngx-toastr';
import {MatSnackBar} from '@angular/material';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-form-test',
  template: `
    <form [formGroup]="formGroup" (submit)="sendForm()">
      <div>
        {{formGroup?.value | json}}
      </div>
      <div>
<!--        {{payObj | json}}-->
      </div>
      <app-test-custom-combo-offline
        [control]="formGroup?.controls?.nom"
        placeholder="custom combo"></app-test-custom-combo-offline>
      <app-test-autocomplate
        [control]="formGroup?.controls?.prenoms"
        placeholder="custom combo"
        [searchControlDefaultValue]="'ville'"></app-test-autocomplate>
      <input placeholder="nom" formControlName="nom"/>
      <input placeholder="prenoms" formControlName="prenoms"/>
      <div formGroupName="adresse">
        <input placeholder="ville" required formControlName="ville"/>
        <input placeholder="pays" formControlName="pays"/>
      </div>
      <div formArrayName="telephones">
        <h3>telephones</h3>
        <button type="button" (click)="addToFormArray(formGroup?.controls?.telephones, telephone, true)">Ajouter</button>
        <div *ngFor="let tel of formGroup?.controls?.telephones?.controls;let i=index">
          <button type="button" (click)="removeFromFormArrayAt(formGroup?.controls?.telephones, i)">Supprimer</button>
          <div [formGroupName]="i">
            <input placeholder="numero" formControlName="numero"/>
            <div formGroupName="adresse">
              <input placeholder="pays" formControlName="pays"/>
            </div>
          </div>
        </div>
      </div>
      <button type="submit">Send</button>
      <button type="reset">reset</button>
    </form>

    <button type="text" (click)="confirm()" pButton icon="pi pi-check" label="Confirmd"></button>
  `
})
export class FormTestComponent extends ClvReactiveForm implements OnInit {
  personne = new PersonneModel();
  telephone = new TelephoneModel();
  adr = new AdresseModel('dfd', 'dsfgdf');
  adrs = new AdresseModel('dfd', 'dsfgdf');
  paysObj = new PaysModel(null, '', '');
  payObj = new PaysModel(null, '', '');
  constructor(public httpClient: HttpClient,
              private toastService: ToastrService,
              private snakeBarService: MatSnackBar,
              private confirmationService: ConfirmationService) {
    super(httpClient);
    this.defaultObject = new PersonneModel();
    this.requestWritter.url = 'http://localhost:4200';
    this.requestWritter.method = ClvRequestMethod.POST;
    this.afterCannotSendShower = new ClvConfirmPrimeNgShower(confirmationService);
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      header: 'oops',
      accept: () => {
        console.log('ok');
        // Actual logic to perform a confirmation
      }
    });
  }

  addToFormArray(array: AbstractControl, value: any, reset: boolean = false) {
    const group = ClvReactiveForm.objectToReactiveForm(JSON.parse(JSON.stringify(value)));
    if (reset) {
      group.reset();
    }
    (<FormArray> array).push(group);
  }

  removeFromFormArrayAt(array: AbstractControl, index: number) {
    (<FormArray> array).removeAt(index);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.formGroup.setControl('nomm', new FormControl());
    this.inputObservation = [
      new ClvInputObservation(this.formGroup.controls.nomm, this.formGroup.controls.nom)
    ];
  }
}
