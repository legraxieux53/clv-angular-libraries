import {ClvRequest} from './clv-request';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ClvRequestMethod} from './clv-request-method';
import {catchError, retry, tap} from 'rxjs/internal/operators';
import {ClvRequestType} from './clv-request-type';
import {Autowired} from '@angular-ru/autowired';

//@dynamic
export class ClvRequestSender {
  static me: ClvRequestSender;
  @Autowired() httpClient: HttpClient;
  private _request: ClvRequest;
  private _retry: number;
  private _sending = false;
  constructor(request: ClvRequest = new ClvRequest('', undefined)) {
    ClvRequestSender.me = this;
    this._request = request;
    this._retry = 0;
  }

  get sending(): boolean {
    return this._sending;
  }

  set sending(value: boolean) {
    this._sending = value;
  }

  get request(): ClvRequest {
    return this._request;
  }

  set request(value: ClvRequest) {
    this._request = value;
  }

  get retry(): number {
    return this._retry;
  }

  set retry(value: number) {
    this._retry = value;
  }

  public sendRequest(): Observable<any> {
    const headers = {};
    const params = {};
    if (this.request.requestType === ClvRequestType.WRITTER) {
      this.sending = true;
    }
    this.request.headers.map(value => {
      headers[value.key] = value.value;
    });
    this.request.params.map(value => {
      headers[value.key] = value.value;
    });
    switch (this.request.method) {
      case ClvRequestMethod.GET:
        return this.httpClient.request('GET', this.request.url, {observe: 'response', headers: headers, params: params}).pipe(
          retry(this.retry),
          tap((result) => {
            this.request.response = result.body;
            if (this.request.requestType === ClvRequestType.WRITTER) {
              if (this.isError200(result)) {
                this.afterError200(this.request, result);
              } else {
                this.afterSuccess(this.request, result);
              }
            }
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }, e => {
            this.afterError(this.request, e);
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }),
          catchError(this.handleError)
        );
        break;
      case ClvRequestMethod.POST:
        return this.httpClient.request('POST', this.request.url, {body: this.request.data, observe: 'response', headers: headers, params: params}).pipe(
          retry(this.retry),
          tap((result) => {
            this.request.response = result.body;
            if (this.request.requestType === ClvRequestType.WRITTER) {
              if (this.isError200(result)) {
                this.afterError200(this.request, result);
              } else {
                this.afterSuccess(this.request, result);
              }
            }
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }, e => {
            this.afterError(this.request, e);
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }),
          catchError(this.handleError)
        );
        break;
      case ClvRequestMethod.PUT:
        return this.httpClient.request('PUT', this.request.url, {body: this.request.data, observe: 'response', headers: headers, params: params}).pipe(
          retry(this.retry),
          tap((result) => {
            this.request.response = result.body;
            if (this.request.requestType === ClvRequestType.WRITTER) {
              if (this.isError200(result)) {
                this.afterError200(this.request, result);
              } else {
                this.afterSuccess(this.request, result);
              }
            }
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }, e => {
            this.afterError(this.request, e);
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }),
          catchError(this.handleError)
        );
        break;
      case ClvRequestMethod.DELETE:
        return this.httpClient.request('DELETE', this.request.url, {observe: 'response', headers: headers, params: params}).pipe(
          retry(this.retry),
          tap((result) => {
            this.request.response = result.body;
            if (this.request.requestType === ClvRequestType.WRITTER) {
              if (this.isError200(result)) {
                this.afterError200(this.request, result);
              } else {
                this.afterSuccess(this.request, result);
              }
            }
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }, e => {
            this.afterError(this.request, e);
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }),
          catchError(this.handleError)
        );
        break;
      default:
        return this.httpClient.request('GET', this.request.url, {observe: 'response', headers: headers, params: params}).pipe(
          retry(this.retry),
          tap((result) => {
            this.request.response = result.body;
            if (this.request.requestType === ClvRequestType.WRITTER) {
              if (this.isError200(result)) {
                this.afterError200(this.request, result);
              } else {
                this.afterSuccess(this.request, result);
              }
            }
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }, e => {
            this.afterError(this.request, e);
            if (this.request.requestType === ClvRequestType.WRITTER) { this.sending = false; }
          }),
          catchError(this.handleError)
        );
    }
  }

  public afterCannotSend() {
    //todo
  }

  public handleError(error: HttpErrorResponse) {
    // ClvRequestSender.me.sending = false;
    // ClvRequestSender.me.afterError(null, error);
    return throwError('Backend response with error');
  }

  public beforeSending(request: ClvRequest) {
    //todo
  }

  public afterSending(request: ClvRequest, response: HttpResponse<any>) {
    //todo
  }

  public afterSuccess(request: ClvRequest, response: HttpResponse<any>) {
    //todo
  }

  public afterError(request: ClvRequest, error: HttpErrorResponse) {
    //todo
  }
  public afterError200(request: ClvRequest, error: HttpResponse<any>) {
    //todo
  }
  public isError200(error: HttpResponse<any>): boolean {
    //todo
    return false;
  }
}
