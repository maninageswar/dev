import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rNIS'
})
export class RNISPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace(/[0-9]/g, '');
  }

}
