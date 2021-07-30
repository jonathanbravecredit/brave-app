import { IPublicPartition } from '@shared/interfaces';

export interface IPublicItemsDetailsConfig {
  publicPartition: IPublicPartition;
  docketNumber?: string;
  courtName?: string;
  courtLocation?: string;
  dateFiled?: string;
  datePaid?: string;
  dateUpdated?: string;
  publicItemType?: string;
  expirationDate?: string;
}
