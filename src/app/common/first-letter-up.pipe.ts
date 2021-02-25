import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUp'
})
export class FirstLetterUpPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let arr = value.split(" ");
    value = "";
    arr.map((str: string)=> {
      value += str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + " ";
    });
    return value;
  }

}
