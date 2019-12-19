import {ClvCustomInput} from './clv-custom-input';
import {Input, OnInit} from '@angular/core';

export abstract class ClvCombo extends ClvCustomInput implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('indicatorText') indicatorText = '-- Selectionnez une valeur --';

  ngOnInit(): void {
    this.formData = this.buildingFormData();
  }

  /**
   * This function builds the selection data array. Inside this function, you can perform the data recovery request.
   */
  public abstract buildingFormData(): any;

  /**
   * This function builds the value of the input.
   */
  public abstract buildingValue(item: any): any;

  public abstract buildingLibelle(item: any): any;
}
