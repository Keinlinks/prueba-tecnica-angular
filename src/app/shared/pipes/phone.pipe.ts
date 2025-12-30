import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    return value;
  }

}
