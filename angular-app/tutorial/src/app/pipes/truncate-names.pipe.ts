import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateNames',
  standalone: true
})
export class TruncateNamesPipe implements PipeTransform {

  transform(value: string, maxLength: number = 16, ellipsis: string = '...'): unknown {
    if (value.length > maxLength) {
      return value.slice(0,maxLength ) + ellipsis;
    }
    return value;
  }

}
