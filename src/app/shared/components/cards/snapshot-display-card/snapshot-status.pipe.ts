import { Pipe, PipeTransform } from '@angular/core';
import { SnapshotStatus } from './snapshot-display-card.component';

const enumStrColorCLassIndicator = {
  [SnapshotStatus.Danger]: 'brave-danger',
  [SnapshotStatus.Safe]: 'brave-safe',
  [SnapshotStatus.Critical]: 'brave-critical',
  [SnapshotStatus.Default]: 'lt-gray',
};

@Pipe({
  name: 'snapshotStatus',
})
export class SnapshotStatusPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    let result = '';
    console.log('snapshot pipe', value);
    let status = BRAVE_STATUS_SNAPSHOT[value.toUpperCase()];

    const outputStyle = args[0];
    if (outerHeight !== undefined) {
      const prefix = outputStyle === 'text' ? 'text-' : 'bg-';
      result = prefix + enumStrColorCLassIndicator[status as SnapshotStatus];
      if (outputStyle === 'text') {
        result += ' text-3.5';
      }
    }
    return result;
  }
}

const BRAVE_STATUS_SNAPSHOT: Record<string, any> = {
  U: SnapshotStatus.Default,
  C: SnapshotStatus.Safe,
  '0': SnapshotStatus.Safe,
  '1': SnapshotStatus.Danger,
  '2': SnapshotStatus.Danger,
  '3': SnapshotStatus.Danger,
  '4': SnapshotStatus.Critical,
  '7': SnapshotStatus.Critical,
  '8R': SnapshotStatus.Critical,
  '9': SnapshotStatus.Critical,
};
