import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUp'
})
export class FirstLetterUpPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
