import { Pipe, PipeTransform } from '@angular/core';
import { SnapshotStatus } from './snapshot-display-card.component';

const enumStrColorCLassIndicator = {
  [SnapshotStatus.Danger]: 'brave-danger',
  [SnapshotStatus.Safe]: 'brave-safe',
  [SnapshotStatus.SemiCritical]: 'brave-semicritical',
  [SnapshotStatus.Critical]: 'brave-critical',
  [SnapshotStatus.Default]: 'brave-unknown',
  [SnapshotStatus.Normal]: 'brave-normal',
};

@Pipe({
  name: 'snapshotStatus',
})
export class SnapshotStatusPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (!value) return SnapshotStatus.Default;
    let result = '';
    const outputStyle = args[0];
    if (outerHeight !== undefined) {
      const prefix = outputStyle === 'text' ? 'text-' : 'bg-';
      result = prefix + enumStrColorCLassIndicator[value as SnapshotStatus];
      if (outputStyle === 'text') {
        result += ' text-3.5';
      }
    }
    return result;
  }
}
