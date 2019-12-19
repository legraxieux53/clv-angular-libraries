import {Pipe, PipeTransform} from '@angular/core';
import {ClvTsUtilsCommonsJs, ThousandSeparatorMode} from 'clv-ts-utils';

@Pipe({
  name: 'clvThousandSeparator'
})
export class ClvThousandSeparatorPipe implements PipeTransform {
  transform(value: any, decimalPre: number = 2, mode = ThousandSeparatorMode.DEFAULT): any {
    return ClvTsUtilsCommonsJs.thousandSeparator(value, decimalPre, mode);
  }
}
