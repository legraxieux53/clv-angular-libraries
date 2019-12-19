import {AbstractControl} from '@angular/forms';

export class ClvInputObservation {
  private _source: AbstractControl;
  private _target: AbstractControl;
  private _opperation: string;

  constructor(source: AbstractControl, target: AbstractControl) {
    this._source = source;
    this._target = target;
  }

  get source(): AbstractControl {
    return this._source;
  }

  set source(value: AbstractControl) {
    this._source = value;
  }

  get target(): AbstractControl {
    return this._target;
  }

  set target(value: AbstractControl) {
    this._target = value;
  }

  get opperation(): string {
    return this._opperation;
  }

  set opperation(value: string) {
    this._opperation = value;
  }
}
