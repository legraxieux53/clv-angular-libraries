import {NgModule} from '@angular/core';
import {ClvAngularPipesUtilitiesComponent} from './clv-angular-pipes-utilities.component';
import {ObjectSumFieldPipe} from './pipes/object-sum-field.pipe';
import {DevisePipe} from './pipes/devise.pipe';
import {CommonModule} from '@angular/common';
import {ClvThousandSeparatorPipe} from './pipes/clv-thousand-separator.pipe';

@NgModule({
  declarations: [ClvAngularPipesUtilitiesComponent, ObjectSumFieldPipe, DevisePipe,
    ClvThousandSeparatorPipe],
  imports: [
    CommonModule
  ],
  exports: [ClvAngularPipesUtilitiesComponent, ObjectSumFieldPipe, DevisePipe,
    ClvThousandSeparatorPipe]
})
export class ClvAngularPipesUtilitiesModule { }
