import {ClvRequestMethod} from './clv-request-method';
import {ClvRequestType} from './clv-request-type';
import {ClvRequestHeader} from './clv-request-header';
import {ClvRequestParam} from './clv-request-param';

export class ClvRequest {
  private _url: string;
  private _method: ClvRequestMethod;
  private _data: any;
  private _response: any;
  private _requestType: ClvRequestType;
  private _headers: ClvRequestHeader[];
  private _params: ClvRequestParam[];


  constructor(url: string,
              data: any,
              method: ClvRequestMethod = ClvRequestMethod.GET,
              requestType: ClvRequestType = ClvRequestType.READER,
              headers: ClvRequestHeader[] = [new ClvRequestHeader('Content-Type', 'application/json')],
              params: ClvRequestParam[] = []) {
    this._url = url;
    this._method = method;
    this._data = data;
    this._requestType = requestType;
    this._headers = headers;
    this._params = params;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get method(): ClvRequestMethod {
    return this._method;
  }

  set method(value: ClvRequestMethod) {
    this._method = value;
  }

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  get response(): any {
    return this._response;
  }

  set response(value: any) {
    this._response = value;
  }

  get requestType(): ClvRequestType {
    return this._requestType;
  }

  set requestType(value: ClvRequestType) {
    this._requestType = value;
  }

  get headers(): ClvRequestHeader[] {
    return this._headers;
  }

  set headers(value: ClvRequestHeader[]) {
    this._headers = value;
  }

  get params(): ClvRequestParam[] {
    return this._params;
  }

  set params(value: ClvRequestParam[]) {
    this._params = value;
  }
}
