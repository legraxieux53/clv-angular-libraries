import {Pipe, PipeTransform} from '@angular/core';
import {ClvTsUtilsCommonsJs} from 'clv-ts-utils';

@Pipe({
  name: 'clvCorrespondToInArray'
})
export class CorrespondToInArrayPipe implements PipeTransform {
  transform(value: any, array: Array<any>, from: string, to: string): any {
    const objet = ClvTsUtilsCommonsJs.getObjectByFieldValue(array, from, value);
    if (objet) {
      return objet[to];
    }
    return value;
  }
}
