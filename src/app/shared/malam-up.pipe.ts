import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'malamUp'
})
export class MalamUpPipe implements PipeTransform {

  transform(value:string, char:string, flag:boolean): string {
    return flag ? value.toUpperCase() + char : value; 
  }

}
