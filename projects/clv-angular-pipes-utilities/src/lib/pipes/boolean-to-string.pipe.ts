import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'clvBoolToStr'})
export class BooleanToStringPipe implements PipeTransform {

  transform(value: boolean): any {
    return (value) ? 'Yes' : 'No';
  }
}

