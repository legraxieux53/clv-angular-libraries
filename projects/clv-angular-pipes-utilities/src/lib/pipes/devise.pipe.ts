import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'devise'
})
export class DevisePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
