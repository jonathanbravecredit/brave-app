/*====================================*/
/* !!Important!!                      */
/* - Keep all spelling mistakes as is */
/* - this is the investigation results*/
/* - field name 'disputeCreditBureau' */
/*====================================*/

import { ITUUnparsed } from '@shared/interfaces/common-tu.interface';

export interface IDisputeCreditBureau {
  creditBureau: ICreditBureau;
}

export interface ICreditBureau {
  version: number | string;
  transactionControl: ITransactionControl;
  productArray: IProduct | IProduct[];
}

interface ITransactionControl {
  tracking: ITracking;
}

interface ITracking {
  transactionTimeStamp: string;
  language: string;
  identifier: IIdentifier;
  responseCode: number;
  responseMessage: string;
}

interface IIdentifier {
  fin: string;
  activityNumber: number | string;
  partyId: number | string;
}

interface IProduct {
  code: number;
  subject: ISubject | ISubject[];
}

interface ISubject {
  fileAccessCode: string;
  enclosures: IEnclosures;
}

interface IEnclosures {
  codes: ICodes | ICodes[];
  addresseeContact: IAddresseeContact;
}

interface ICodes {
  code: string | number;
  type: string | number;
  versionNo: string | number;
}

interface IAddresseeContact {
  name: ITUUnparsed;
  address: IAddress;
}

interface IAddress {
  street: ITUUnparsed;
  location: ITUUnparsed;
  order: string | number;
}
