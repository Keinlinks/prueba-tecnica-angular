import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i += 4) {
      result += value.substr(i, 4) + ' ';
    }
    return result.trim();
  }
}
