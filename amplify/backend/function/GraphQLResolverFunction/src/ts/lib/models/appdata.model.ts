import 'reflect-metadata';
import { Model, PartitionKey } from '@shiftcoders/dynamo-easy';
import { Agencies, AppData, Preferences, User } from '../aws/api.service';

const tableName = `AppData-${process.env.API_BRAVEAPP_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

@Model({ tableName: tableName })
export class AppDataModel implements AppData {
  @PartitionKey()
  id!: string;
  __typename!: 'AppData';
  user?: User;
  agencies?: Agencies;
  preferences?: Preferences;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
}
