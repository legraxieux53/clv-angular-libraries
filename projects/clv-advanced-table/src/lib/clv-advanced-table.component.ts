import {Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ClvTableColumnField, ClvTableParamsModel} from './clv-table-params.model';
import {MatPaginatorIntl, PageEvent} from '@angular/material';
import {ClvTrComponent} from './clv-tr.component';

@Component({
  selector: 'clv-advanced-table',
  template: `
    <div *ngIf="params?.canShowSingleSearch" [class]="params?.selectSingleClass">
      <div><ng-content select=".clv-tleft-head, clv-tleft-head"></ng-content></div>
      <div>
        <mat-form-field class="d-inline-block" [style.width]="'60%'">
          <input #minp (keyup)="handleSingleChange(minp?.value)"
                 (blur)="handleSingleBlurChange(minp?.value)"
                 (change)="handleSingleBlurChange(minp?.value)"
                 placeholder="{{params?.placeholderSearchPrefixLabel}}"
                 [attr.aria-label]="params?.placeholderSearchPrefixLabel"
                 matInput>
        </mat-form-field>
        <mat-form-field class="d-inline-block" [style.width]="'40%'">
          <mat-select #filterSelection
                      [value]="params?.canShowSingleSearch ? params?.firstColumnCanSingleSearch.name : null"
                      (selectionChange)="handleSelectionChange($event.value)">
            <ng-container  *ngFor="let item of params?.columns">
              <mat-option *ngIf="item && item?.canSingleSearch"
                          [value]="item?.name">{{item?.title}}</mat-option>
            </ng-container>
          </mat-select>
        </mat-form-field>
      </div>
    </div>
    <button mat-button>
    </button>
    <table #table [class]="params?.tableClass">
      <thead [class]="params?.headerClass">
      <tr>
        <th scope="col" width="20px" style="cursor: pointer;" (click)="refresh?.emit()">
          <mat-icon>refresh</mat-icon>
        </th>
        <th scope="col" width="{{column?.size}}" *ngFor="let column of params?.columns">{{column?.title}}</th>
      </tr>
      </thead>
      <tbody *ngIf="params?.canShowMultiSearch" [class]="params?.searchZoneClass">
        <tr>
          <td></td>
          <td *ngFor="let column of params?.columns">
            <mat-form-field *ngIf="column?.canSearch">
              <input matInput #searchInput [placeholder]="params?.placeholderSearchPrefixLabel+' '+column?.title"
              (blur)="handleChange(searchInput?.value, column)"/>
            </mat-form-field>
          </td>
        </tr>
      </tbody>
      <ng-content #trs *ngIf="params?.datas && params?.datas?.length > 0; else no_data" select="clv-tr, .clv-tr"></ng-content>
      <ng-content select="clv-tfoot .clv-tfoot"></ng-content>
    </table>

    <ng-template #no_data>
      <tbody [class]="params?.noDataZoneClass">
        <tr>
          <td colspan="100%" style="text-align: center;">{{params?.noDataLabel}}</td>
        </tr>
      </tbody>
    </ng-template>

    <mat-paginator *ngIf="!params?.pagination?.hide" (page)="handlePage($event)" [length]="params?.pagination?.length"
                   [pageSize]="params?.pagination?.pageSize"
                   [pageSizeOptions]="params.pagination?.pageSizeOptions">
    </mat-paginator>
  `,
  styles: [`
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
  `]
})
export class ClvAdvancedTableComponent implements OnInit {
  @ViewChild('table', { static: true }) table: ElementRef;
  @ContentChildren(ClvTrComponent) trs: ClvTrComponent;
  // tslint:disable-next-line:no-input-rename
  @Input('params') params: ClvTableParamsModel;
  @Output() page = new EventEmitter<PageEvent>(null);
  @Output() search = new EventEmitter<ClvTableColumnField[]>(null);
  @Output() refresh = new EventEmitter<void>(null);
  private _signleSelectionName: string;
  private _signleSelectionValue: string;

  constructor(public paginatorIntl: MatPaginatorIntl) {
    this._signleSelectionName = '';
    this._signleSelectionValue = '';
  }

  get signleSelectionName(): string {
    return this._signleSelectionName;
  }

  set signleSelectionName(value: string) {
    this._signleSelectionName = value;
  }

  get signleSelectionValue(): string {
    return this._signleSelectionValue;
  }

  set signleSelectionValue(value: string) {
    this._signleSelectionValue = value;
  }

  ngOnInit() {
    this.paginatorIntl.firstPageLabel = this.params.pagination.firstPageLabel;
    this.paginatorIntl.itemsPerPageLabel = this.params.pagination.itemsPerPageLabel;
    this.paginatorIntl.lastPageLabel = this.params.pagination.lastPageLabel;
    this.paginatorIntl.previousPageLabel = this.params.pagination.previousPageLabel;
    this.paginatorIntl.nextPageLabel = this.params.pagination.nextPageLabel;
    try {
      this.signleSelectionName = this.params.firstColumnCanSingleSearch.name;
    } catch (e) {
    }
  }

  handlePage(event: PageEvent) {
    this.page.emit(event);
  }

  handleChange(event, column: ClvTableColumnField) {
    this.params.getColumn(column.name).search = event;
    this.search.emit(this.params.columns);
  }

  handleSingleChange(event) {
    this.signleSelectionValue = event;
    this.params.getColumn(this.signleSelectionName).search = this.signleSelectionValue;
    this.search.emit(this.params.columns);
  }

  handleSelectionChange(value: string): void {
    this.signleSelectionName = value;
    this.params.getColumn(this.signleSelectionName).search = this.signleSelectionValue;
    this.search.emit(this.params.columns);
  }

  handleSingleBlurChange(event) {
    setTimeout(() => {
      this.handleSingleChange(event);
    }, 1000);
  }
}
