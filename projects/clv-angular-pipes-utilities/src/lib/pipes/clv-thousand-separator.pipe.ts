import {Pipe, PipeTransform} from '@angular/core';
import {ClvTsUtilsCommonsJs} from 'clv-ts-utils';

@Pipe({
  name: 'clvThousandSeparator'
})
export class ClvThousandSeparatorPipe implements PipeTransform {
  transform(value: any, decimalPre: number = 2, mode = 1): any {
    return ClvTsUtilsCommonsJs.thousandSeparator(value, decimalPre, mode);
  }
}
