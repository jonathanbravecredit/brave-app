import { Pipe, PipeTransform } from '@angular/core';
import { IFilledOnlyTextButtonConfig } from '@shared/components/buttons/filled-onlytext-button/filled-onlytext-button.component';

@Pipe({
  name: 'filledOnlytextButton',
})
export class FilledOnlytextButtonPipe implements PipeTransform {
  transform(value: IFilledOnlyTextButtonConfig): string {
    let cls = `${value.backgroundColor} ${value.color} active:${value.activeColor}`;
    cls = `${cls} ${sizeSpecificClass[value.buttonSize]}`;
    return cls;
  }
}

const sizeSpecificClass: Record<string, any> = {
  sm: 'text-xs px-4 py-2 hover:shadow-md',
  base: 'text-sm px-6 py-3 hover:shadow-lg',
  lg: 'text-base px-8 py-3 hover:shadow-lg',
};
