import {NgModule} from '@angular/core';
import {ClvAdvancedTableComponent} from './clv-advanced-table.component';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';
import {ClvTrComponent} from './clv-tr.component';
import {ClvTdComponent} from './clv-td.component';
import {ClvTfootComponent} from './clv-tfoot.component';
import {ClvTdetailComponent} from './clv-tdetail.component';
import {ClvTleftHeadComponent} from './clv-tleft-head.component';

@NgModule({
  declarations: [ClvAdvancedTableComponent, ClvTrComponent,
  ClvTdComponent, ClvTfootComponent, ClvTdetailComponent, ClvTleftHeadComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [ClvAdvancedTableComponent, ClvTrComponent,
    ClvTdComponent, ClvTfootComponent, ClvTdetailComponent, ClvTleftHeadComponent]
})
export class ClvAdvancedTableModule { }
