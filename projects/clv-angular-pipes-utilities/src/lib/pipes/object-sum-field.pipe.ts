import {Pipe, PipeTransform} from '@angular/core';
import {ClvTsUtilsCommonsJs} from 'clv-ts-utils';

@Pipe({
  name: 'objectSumField'
})
export class ObjectSumFieldPipe implements PipeTransform {
  transform(objs: any[], fieldName: string): number {
    return ClvTsUtilsCommonsJs.objectSumField(objs, fieldName);
  }

}
