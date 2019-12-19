import {NgModule} from '@angular/core';
import {ClvAngularDirectivesUtilitiesComponent} from './clv-angular-directives-utilities.component';
import {ClvSeparatorThousandDirective} from './directives/clv-separator-thousand.directive';
import {ClvHoverAddClassDirective} from './directives/clv-hover-add-class.directive';
import {ClvActiveAddClassDirective} from './directives/clv-active-add-class.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ClvAngularDirectivesUtilitiesComponent, ClvSeparatorThousandDirective, ClvHoverAddClassDirective,
    ClvActiveAddClassDirective],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [ClvAngularDirectivesUtilitiesComponent, ClvSeparatorThousandDirective, ClvHoverAddClassDirective,
    ClvActiveAddClassDirective]
})
export class ClvAngularDirectivesUtilitiesModule { }
