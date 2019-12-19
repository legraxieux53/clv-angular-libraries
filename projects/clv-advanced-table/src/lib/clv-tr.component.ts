import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ClvTableParamsModel} from './clv-table-params.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'clv-tr',
  template: `
    <tr [class]="params?.getTrClass(id)">
      <td>
        <button mat-button [class]="'mat-button ' + params?.details?.detailButtonClass"
                *ngIf="!detailState && params?.details?.detail" (click)="openDetail()">+</button>
        <button mat-button [class]="'mat-button ' + params.details?.detailButtonMinusClass"
                *ngIf="detailState && params?.details?.detail"
                (click)="closeDetail()">-
        </button>
      </td>
      <ng-content select="clv-td, .clv-td"></ng-content>
    </tr>
    <tr [class]="params?.details?.detailClass" @detailAnim *ngIf="params?.details?.detail && detailState">
      <td colspan="100%" *ngIf="detailState">
        <ng-content *ngIf="detailState" select="clv-tdetail, clv-tdetail"></ng-content>
      </td>
    </tr>
  `,
  styles: [`
    :host {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
    }
    .select-single-class {
      padding: 15px;
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      background: white;
    }

    .tr-pair-class {
      background: white;
      width: auto;
      min-width: auto;
      font-size: 20px;
    }
    .tr-impair-class {
      color: #000000 !important;
      background: #85baf5 !important;
      width: auto;
      min-width: auto;
      font-size: 20px;
    }
    .table-class {
      width: 100%;
      margin-bottom: 1rem;
      color: #212529;
      border-collapse: collapse;
    }

    .header-class {
      color: #ffffff !important;
      background: #0054ee !important
    }

    .footer-class {
      color: #ffffff !important;
      background: #2685ee !important
    }

    .button-class {
      color: #ffffff !important;
      background: #145523 !important;
    }

    .button-minus-class {
      color: #ffffff !important;
      background: #921925 !important;
    }

    .search-zone-class {
      padding: .75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }

    .detail-class {
      color: #000000 !important;
      background: #cccccc !important;
    }

    .no-data-zone-class {
      background: white;
    }
  `],
  animations: [
    trigger('detailAnim', [
      transition(':enter', [
        style({transformOrigin: 'top', transform: 'rotateX(90deg)'}),
        animate('0.5s', style({transformOrigin: 'top', transform: 'rotateX(0deg)'}))
      ]),
      transition(':leave', [
        animate('0.5s', style({transformOrigin: 'top', transform: 'rotateX(90deg)'}))
      ])
    ])
  ]
})
export class ClvTrComponent {
  @Input('params') params: ClvTableParamsModel;
  @Input('data') data: any;
  @Input('id') id: number;
  private _detailState: boolean;
  @Output() onDetailOpened = new EventEmitter<boolean>();
  @Output() onDetailClosed = new EventEmitter<boolean>();
  constructor() {
    this._detailState = false;
  }

  get detailState(): boolean {
    return this._detailState;
  }

  set detailState(value: boolean) {
    this._detailState = value;
  }

  public openDetail() {
    this._detailState = true;
    this.onDetailOpened.emit(this._detailState);
  }

  public closeDetail() {
    this._detailState = false;
    this.onDetailClosed.emit(this._detailState);
  }
}
