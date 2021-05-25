import { Pipe, PipeTransform } from '@angular/core';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Pipe({
  name: 'outlineInput',
})
export class OutlineInputPipe implements PipeTransform {
  transform(value: IOutlineInputeConfig, ...args: unknown[]): string {
    let cls = `${sizeSpecificClass[value.size]}`;
    return cls;
  }
}

const sizeSpecificClass: Record<string, any> = {
  sm: 'text-sm px-3 py-1',
  base: 'text-sm px-3 py-3',
  lg: 'text-base px-3 py-4',
};
