import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inbuild'
})
export class InbuildPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.trim().split(/\s+/).length;
  }
}
