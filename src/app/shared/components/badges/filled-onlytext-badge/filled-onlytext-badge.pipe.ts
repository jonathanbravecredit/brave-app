import { Pipe, PipeTransform } from '@angular/core';
import { IFilledOnlytextBadgeConfig } from '@shared/components/badges/filled-onlytext-badge/filled-onlytext-badge.component';

@Pipe({
  name: 'filledOnlytextBadge',
})
export class FilledOnlytextBadgePipe implements PipeTransform {
  transform(value: IFilledOnlytextBadgeConfig): string {
    let cls = `${value.color} ${value.backgroundColor}`;
    cls = `${cls} ${sizeSpecificClass[value.size]}`;
    return cls;
  }
}

const sizeSpecificClass: Record<string, any> = {
  sm: 'text-xs px-2 py-1',
  base: 'text-xs px-2 py-1',
  lg: 'text-xs px-2 py-1',
};
