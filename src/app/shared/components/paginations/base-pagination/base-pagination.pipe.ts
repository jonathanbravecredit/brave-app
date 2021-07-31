import { Pipe, PipeTransform } from '@angular/core';
import { BASE_PAGINATION_BACKGROUND_COLORS as bgColors, BASE_PAGINATION_COLORS as textColors } from './constants';

@Pipe({
  name: 'basePagination'
})
export class BasePaginationPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    const outputType: string = args[0];
    const isActive: boolean = args[1];
    const isText = outputType === 'text-class';
    return this.getColorClassByValueState(value, isText, isActive);
  }

  private getColorClassByValueState(state: string, isText: boolean, isActive: boolean): string {
    const targetColorGroup = isText ? textColors : bgColors;
    return `${(targetColorGroup as any)[state][(isActive ? 'active' : 'regular')]}`;
  }
}
