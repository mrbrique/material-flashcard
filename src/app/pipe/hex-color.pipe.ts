import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexColor'
})
export class HexColorPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return '#' + value.toString(16).padStart(6, '0');
  }

}
