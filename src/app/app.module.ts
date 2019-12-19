import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {ClvAngularBootModule} from 'clv-angular-boot';
import {FormTestComponent} from './form/form-test.component';
import {TestTableComponent} from './table/test-table.component';
import {TestCustomComboOfflineComponent} from './form/test-custom-combo-offline.component';
import {TestCustomAutocomplateComponent} from './form/test-custom-autocomplate.component';
import {ConfirmationService, ConfirmDialogModule} from 'primeng/primeng';
import {BeanAccessibleModule} from '@angular-ru/autowired';

@NgModule({
  declarations: [
    AppComponent, FormTestComponent, TestTableComponent, TestCustomComboOfflineComponent,
    TestCustomAutocomplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClvAngularBootModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatOptionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatAutocompleteModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ConfirmDialogModule,
    BeanAccessibleModule.forRoot()
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
