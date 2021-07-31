import { Pipe, PipeTransform } from '@angular/core';
import { ILinksOnlyTextButtonConfig } from '@shared/components/buttons/links-onlytext-button/links-onlytext-button.component';

@Pipe({
  name: 'linksOnlytextButton',
})
export class LinksOnlytextButtonPipe implements PipeTransform {
  transform(value: ILinksOnlyTextButtonConfig): string {
    let cls = `${value.color}`;
    cls = `${cls} ${sizeSpecificClass[value.buttonSize]}`;
    return cls;
  }
}

const sizeSpecificClass: Record<string, any> = {
  sm: 'text-xs px-3 py-1',
  base: 'text-sm px-6 py-2',
  lg: 'text-base px-8 py-3',
};
