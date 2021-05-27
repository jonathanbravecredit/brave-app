export interface IUserAttributes {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  dob: {
    year: string;
    month: string;
    day: string;
  };
  address: {
    addressOne: string;
    addressTwo: string;
    city: string;
    state: string;
    zip: string;
  };
  ssn: {
    lastfour: string;
    full: string;
  };
  phone: {
    primary: string;
  };
}

export class User {
  public id: string | null = null;
  public signedIn: boolean = false;
  public attributes: IUserAttributes | null = null;
  constructor() {}
}
