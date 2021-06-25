import 'reflect-metadata';
import { Model, PartitionKey } from '@shiftcoders/dynamo-easy';

const tableName = process.env.APPDATATABLE;

@Model({ tableName: tableName })
export class AppData {
  @PartitionKey()
  id: string;
}
