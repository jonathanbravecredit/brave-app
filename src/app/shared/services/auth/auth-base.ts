import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '@shared/services/auth/auth.service';
import { CognitoUser } from 'amazon-cognito-identity-js';

// export class AuthBase {
//   private cognitoUser: CognitoUser | undefined;
//   constructor(private auth: AuthService) {
//     auth.authState$.subscribe((user) => {
//       this.cognitoUser = user;
//     });
//     auth.refreshAuthState();
//   }

//   get headers() {
//     let headers = new HttpHeaders();
//     headers = headers.append('Authorization', this.token);
//     return headers;
//   }

//   get token() {
//     return this.cognitoUser?.getSignInUserSession()?.getIdToken()?.getJwtToken() || '';
//   }
// }

// export interface IUser {
//   userFirstName: string;
//   userAttributes: IUserAttributes;
//   isSignedIn: boolean;
//   isAdmin: boolean;
// }

// export interface IUserAttributes {
//   'custom:firstName': string;
//   'custom:lastName': string;
//   'custom:legalFullName': string;
//   'custom:dob': string;
//   'custom:address': string;
//   email: string;
//   email_verified: boolean;
//   sub: string;
// }
