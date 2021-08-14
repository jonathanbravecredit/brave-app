import { Pipe, PipeTransform } from '@angular/core';
import { BASE_MODAL_DEFAULT_BUTTON_STYLE_OBJECT as baseModalButtonStyles } from './constants';

@Pipe({
  name: 'baseModal',
})
export class BaseModalPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    const outputType: string = args[0];
    const styleName: string = args[1];
    if (outputType === 'btn-obj') {
      return (baseModalButtonStyles as any)[value][styleName];
    } else if (outputType === 'btn-inline') {
      return this.getInlineStyles(value);
    }

    return null;
  }

  getInlineStyles(value: string) {
    const obj = (baseModalButtonStyles as any)[value];
    return `${obj.background} ${obj.color}`;
  }
}
