import { Pipe, PipeTransform } from '@angular/core';
import { IFilledClosingAlertConfig } from 'src/app/components/alerts/filled-closing-alert/filled-closing-alert.component';

@Pipe({
  name: 'filledClosingAlert',
})
export class FilledClosingAlertPipe implements PipeTransform {
  transform(value: IFilledClosingAlertConfig): string {
    let cls = `${value.backgroundColor}`;
    cls = `${cls} ${sizeSpecificClass[value.size]}`;
    return cls;
  }
}

const sizeSpecificClass = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  base: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};
