import { Pipe, PipeTransform } from '@angular/core';
import { SnapshotStatus } from './snapshot-display-card.component';

const enumStrColorCLassIndicator = {
  [SnapshotStatus.Danger]: 'brave-danger',
  [SnapshotStatus.Safe]: 'teal-500',
  [SnapshotStatus.Critical]: 'red-500',
  [SnapshotStatus.Default]: 'lt-gray'
};

@Pipe({
  name: 'snapshotStatus'
})
export class SnapshotStatusPipe implements PipeTransform {
  transform(value: SnapshotStatus, ...args: any[]): string {
    let result = '';
    const outputStyle = args[0];
    if (outerHeight !== undefined) {
      const prefix = outputStyle === 'text' ? 'text-' : 'bg-';
      result = prefix + enumStrColorCLassIndicator[value];
      if (outputStyle === 'text') {
        result += ' text-3.5';
      }
    }
    return result;
  }
}
