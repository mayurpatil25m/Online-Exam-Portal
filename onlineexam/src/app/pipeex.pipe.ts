import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeex',
  standalone: true
})
export class PipeexPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
