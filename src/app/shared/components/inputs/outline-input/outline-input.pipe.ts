import { Pipe, PipeTransform } from '@angular/core';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Pipe({
  name: 'outlineInput',
})
export class OutlineInputPipe implements PipeTransform {
  transform(value: IOutlineInputeConfig, ...args: unknown[]): any {
    let cls = { ...sizeSpecificClass[value.size] };
    return cls;
  }
}

const sizeSpecificClass: Record<string, any> = {
  sm: { 'text-sm': true, 'px-3': true, 'py-1': true },
  base: { 'text-sm': true, 'px-3': true, 'py-3': true },
  lg: { 'text-base': true, 'px-3': true, 'py-4': true },
};
