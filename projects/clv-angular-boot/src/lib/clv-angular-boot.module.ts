import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ClvAlertMessageDialogComponent} from './comunication/clv-alert-message-dialog.component';
import {ClvComboTemplateComponent} from './data-management/clv-combo-template.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ClvAutocomplateTemplateComponent} from './data-management/clv-autocomplate-template.component';
import {ClvOverlaysComponent} from './clv-overlays.component';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/primeng';
import {BeanAccessibleModule} from '@angular-ru/autowired';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    DialogModule,
    ConfirmDialogModule,
    BeanAccessibleModule.forRoot()
  ],
  declarations: [ClvAlertMessageDialogComponent, ClvComboTemplateComponent, ClvAutocomplateTemplateComponent,
    ClvOverlaysComponent],
  exports: [ClvAlertMessageDialogComponent, ClvComboTemplateComponent, ClvAutocomplateTemplateComponent,
    ClvOverlaysComponent],
  entryComponents: [ClvAlertMessageDialogComponent]
})
export class ClvAngularBootModule { }
