import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  pure: true // when you set it to false, even if randomText not updated, transform method will be executed
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, ...args: number[]): unknown {
    console.log(value); // randomText -- in which the pipe is applied
    console.log(args); // [100] -- parameter passed to the pipe
    // substring in js
    value = value.substring(0, args[0]);
    return value + '...';
  }
}
