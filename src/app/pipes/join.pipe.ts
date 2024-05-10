import { Pipe, PipeTransform } from '@angular/core';
import { JoinOptions } from '../interfaces/options/JoinOptions';

@Pipe({
  name: 'join',
  standalone: true,
})
export class JoinPipe<T> implements PipeTransform {
  transform(value: T[], options: JoinOptions): string {
    const separator = options?.separator ?? ' & ';

    return value.join(separator);
  }
}
