import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCrop'
})
export class NameCropPipe implements PipeTransform {

  transform(email: string | null): string {
    if (!email) {
      return ''; // or return a default value
    }
    const match = email.match(/^[^@]*/);
    return match ? match[0].replace(/\d/g, '') : email;
  }
  }


