import {NgModule} from '@angular/core';
import {ClvAngularPipesUtilitiesComponent} from './clv-angular-pipes-utilities.component';
import {ObjectSumFieldPipe} from './pipes/object-sum-field.pipe';
import {DevisePipe} from './pipes/devise.pipe';
import {CommonModule} from '@angular/common';
import {ClvThousandSeparatorPipe} from './pipes/clv-thousand-separator.pipe';
import {BooleanToStringPipe} from './pipes/boolean-to-string.pipe';
import {CorrespondToInArrayPipe} from './pipes/correspond-to-in-array.pipe';

@NgModule({
  declarations: [ClvAngularPipesUtilitiesComponent, ObjectSumFieldPipe, DevisePipe,
    ClvThousandSeparatorPipe, BooleanToStringPipe, CorrespondToInArrayPipe],
  imports: [
    CommonModule
  ],
  exports: [ClvAngularPipesUtilitiesComponent, ObjectSumFieldPipe, DevisePipe,
    ClvThousandSeparatorPipe, BooleanToStringPipe, CorrespondToInArrayPipe]
})
export class ClvAngularPipesUtilitiesModule { }
