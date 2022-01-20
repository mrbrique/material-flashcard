import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseIntPipe'
})
export class ParseIntPipePipe implements PipeTransform {

  transform(numInString: string, radix: number): any {
    return parseInt(numInString, radix);
  }

}
