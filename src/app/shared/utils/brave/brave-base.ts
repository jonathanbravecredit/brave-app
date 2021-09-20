export class BraveBase {
  static authAttempts = 2;
  static pinAttempts = 3;
  static pinRequests = 3;
  static pinMaxAge = 15 * 60 * 1000;
  static kbaAttempts = 1;
  static kbaMaxAge = 96 * 60 * 1000;
  constructor() {}
}
