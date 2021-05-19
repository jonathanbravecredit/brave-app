import { Pipe, PipeTransform } from '@angular/core';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';

@Pipe({
  name: 'outlineSelectInput',
})
export class OutlineSelectInputPipe implements PipeTransform {
  transform(value: IOutlineSelectInputConfig, ...args: unknown[]): string {
    let cls = `${sizeSpecificClass[value.size]}`;
    return cls;
  }
}

const sizeSpecificClass: Record<string, any> = {
  sm: 'text-sm px-1 py-1',
  base: 'text-sm px-1 py-3',
  lg: 'text-base px-1 py-4',
};
