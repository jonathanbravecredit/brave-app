import { Injectable } from '@angular/core';
// import Auth from '@aws-amplify/auth';
// import { ISigV4Config, SigV4 } from '@shared/models/signatureV4.model';

@Injectable({
  providedIn: 'root',
})
export class IamService {
  constructor() {}

  // signRequest(
  //   endpoint: string,
  //   method: string,
  //   body: any,
  //   queryParams: any
  // ): Promise<any> {
  //   return Auth.currentCredentials()
  //     .then((credentials) => {
  //       let cred = Auth.essentialCredentials(credentials);
  //       return Promise.resolve(cred);
  //     })
  //     .then((essentialCredentials) => {
  //       let config: ISigV4Config = {
  //         accessKey: essentialCredentials.accessKeyId,
  //         secretKey: essentialCredentials.secretAccessKey,
  //         sessionToken: essentialCredentials.sessionToken,
  //         serviceName: 'execute-api',
  //         defaultAcceptType: 'application/json',
  //         defaultContentType: 'application/json',
  //         region: 'us-east-2',
  //         endpoint: endpoint,
  //       };

  //       let request = {
  //         method,
  //         path: '',
  //         headers: {},
  //         queryParams,
  //         body,
  //       };

  //       let signedRequest = new SigV4(config).signRequest(request);

  //       return Promise.resolve(signedRequest);
  //     });
  // }
}
