import { Pipe, PipeTransform } from '@angular/core';
import { IOutlineOnlyTextButtonConfig } from '@shared/components/buttons/outline-onlytext-button/outline-onlytext-button.component';

@Pipe({
  name: 'outlineOnlytextButton',
})
export class OutlineOnlytextButtonPipe implements PipeTransform {
  transform(value: IOutlineOnlyTextButtonConfig): string {
    let cls = `${value.color} ${value.borderColor} hover:${value.hoverColor} active:${value.activeColor}`;
    cls = `${cls} ${sizeSpecificClass[value.buttonSize]}`;
    return cls;
  }
}

const sizeSpecificClass: Record<string, any> = {
  sm: 'text-xs px-4 py-2',
  base: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-3',
};
