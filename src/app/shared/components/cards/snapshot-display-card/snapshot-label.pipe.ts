import { Pipe, PipeTransform } from '@angular/core';

export enum LabelOfSnapshot {
  Update = 'update',
  Hidden = 'hidden',
  New = 'new',
  NoLabel = 'no-label'
}

const enumStrNameOfLabel = {
  [LabelOfSnapshot.Update]: { text: 'Update', colorClass: 'text-brave-magenta' },
  [LabelOfSnapshot.Hidden]: { text: 'Hidden', colorClass: 'text-lt-gray' },
  [LabelOfSnapshot.New]: { text: 'New', colorClass: 'text-brave-blurple' },
  [LabelOfSnapshot.NoLabel]: { text: '', colorClass: '' }
};

@Pipe({
  name: 'snapshotLabel'
})
export class SnapshotLabelPipe implements PipeTransform {
  transform(value: LabelOfSnapshot, ...args: any[]): string {
    let result = '';
    const typeOfOutput: 'color-class' | 'text' | undefined = args[0];
    if (typeOfOutput !== undefined) {
      const labelValue = enumStrNameOfLabel[value];
      result = typeOfOutput === 'text' ? labelValue.text : labelValue.colorClass;
    }
    return result;
  }
}
