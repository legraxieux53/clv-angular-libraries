import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {ClvCustomInput} from './clv-custom-input';

@Component({
  selector: 'clv-autocomplate-template',
  template: `
    <div>
      <mat-form-field [style.display]="'inline-block'" style="width: calc(100% - 150px)">
        <input [required]="required"
               [placeholder]="placeholder"
               [attr.aria-label]="placeholder"
               [formControl]="control"
               matInput [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option #opt *ngFor="let item of formData | async" [value]="valueFn(item)">
            <div [innerHTML]="libelleFn(item)"></div>
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
      <mat-form-field [style.display]="'inline-block'" [style.width]="'150px'">
        <mat-select [formControl]="searchControl">
          <ng-container *ngFor="let item of searchParams">
            <mat-option *ngIf="item" [value]="item?.value">{{item?.key}}</mat-option>
          </ng-container>
        </mat-select>
      </mat-form-field>
      <!--          <app-form-error-list [submitted]="submitted" [name]="name" [formGroup]="formGroup"></app-form-error-list>-->
    </div>
  `,
  styles: [`
  .mat-option {
    height: auto;
  }`]
})
export class ClvAutocomplateTemplateComponent extends ClvCustomInput {
  // tslint:disable-next-line:no-input-rename
  @Input('libelleFn') libelleFn: any;
  // tslint:disable-next-line:no-input-rename
  @Input('formData') formData: any;
  // tslint:disable-next-line:no-input-rename
  @Input('valueFn') valueFn: any;
  // tslint:disable-next-line:no-input-rename
  @Input('searchControl') searchControl: AbstractControl;
  // tslint:disable-next-line:no-input-rename
  @Input('searchParams') searchParams: {key: string, value: string}[];
}
