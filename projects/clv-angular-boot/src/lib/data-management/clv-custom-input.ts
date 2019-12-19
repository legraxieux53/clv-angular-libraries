import {Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

export class ClvCustomInput {
  // tslint:disable-next-line:no-input-rename
  @Input('placeholder') placeholder: string;
  // tslint:disable-next-line:no-input-rename
  @Input('hint') hint: string;
  // tslint:disable-next-line:no-input-rename
  @Input('required') required: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('control') control: AbstractControl;
  private _formData: any;

  get formData(): any {
    return this._formData;
  }

  set formData(value: any) {
    this._formData = value;
  }
}
