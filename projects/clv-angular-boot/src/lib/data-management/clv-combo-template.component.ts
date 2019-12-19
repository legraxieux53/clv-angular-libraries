import {Component, Input} from '@angular/core';
import {ClvCustomInput} from './clv-custom-input';

@Component({
  selector: 'clv-combo-template',
  template: `
    <mat-form-field style="width: 100%">
      <mat-select [placeholder]="placeholder"
                  [formControl]="control"
                  [required]="required">
        <mat-option [value]="">{{indicatorText}}</mat-option>
        <mat-option #opt *ngFor="let item of formData" [value]="valueFn(item)">
          <span [innerHTML]="libelleFn(item)"></span></mat-option>
      </mat-select>
      <mat-hint align="start">{{hint}}</mat-hint>
    </mat-form-field>
  `,
  styles: [`
  .mat-option {
    height: auto;
  }`]
})
export class ClvComboTemplateComponent extends ClvCustomInput {
  // tslint:disable-next-line:no-input-rename
  @Input('indicatorText') indicatorText = '-- Selectionnez une valeur --';
  // tslint:disable-next-line:no-input-rename
  @Input('libelleFn') libelleFn: any;
  // tslint:disable-next-line:no-input-rename
  @Input('formData') formData: any;
  // tslint:disable-next-line:no-input-rename
  @Input('valueFn') valueFn: any;
}
