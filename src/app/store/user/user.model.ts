export class User {
  public id: string;
  public signedIn: boolean;
  constructor(id: string, signedIn: boolean = false) {
    this.id = id;
    this.signedIn = signedIn;
  }
}
