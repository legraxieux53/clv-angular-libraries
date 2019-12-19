import {Input, OnInit} from '@angular/core';
import {ClvCustomInput} from './clv-custom-input';
import {AbstractControl, FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export abstract class ClvAutocomplete extends ClvCustomInput implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('searchControlDefaultValue')  searchControlDefaultValue: string;
  private _searchParams: {key: string, value: string}[];
  private _searchControl: AbstractControl;

  ngOnInit(): void {
    this.searchControl = new FormControl(this.searchControlDefaultValue);
    this.searchParams = this.buildingSearchParams();
    this.formData = this.control.valueChanges.pipe(
      map(value =>  this.filter(value))
    );
  }

  get searchControl(): AbstractControl {
    return this._searchControl;
  }

  set searchControl(value: AbstractControl) {
    this._searchControl = value;
  }

  get searchParams(): { key: string; value: string }[] {
    return this._searchParams;
  }

  set searchParams(value: { key: string; value: string }[]) {
    this._searchParams = value;
  }

  public abstract buildingSearchParams(): {key: string, value: string}[];

  /**
   * This function builds the value of the input.
   */
  public buildingValue(item: any): any {
    return item[this.searchControl.value];
  }

    public abstract filter(value: any): Observable<any>;

  public abstract buildingLibelle(item: any): any;
}
