import { IPublicPartition } from '@shared/interfaces';

export interface IPublicItemsDetailsConfig {
  publicPartition: IPublicPartition;
  docketNumber?: string;
  responsibility?: string;
  courtName?: string;
  courtNameArray?: [string?, string?, string?];
  courtLocation?: string;
  dateFiled?: string;
  datePaid?: string;
  dateUpdated?: string;
  publicItemType?: string;
  expirationDate?: string;
}
