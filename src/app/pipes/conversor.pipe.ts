import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'conversorPipe'})
export class ConversorPipe implements  PipeTransform {
  transform( value: number, exponent: string):number {
    let exp = parseFloat(exponent);
    return value * (isNaN(exp) ? 1 : exp);// si es un string lo parsea si no que tome la variable de exp
  }
}
