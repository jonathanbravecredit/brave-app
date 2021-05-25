import { IUser } from '@shared/interfaces/user.interface';

export class User implements IUser {
  public id: string;
  public signedIn: boolean;
  constructor(id: string, signedIn: boolean = false) {
    this.id = id;
    this.signedIn = signedIn;
  }
}
