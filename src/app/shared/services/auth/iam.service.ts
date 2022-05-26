import { Injectable } from '@angular/core';
import { Auth } from '@aws-amplify/auth';
import { AwsClient } from 'aws4fetch';
// import { ISigV4Config, SigV4 } from '@shared/utils/signatureV4/signatureV4';

interface IAWS4FetchOptions {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string | undefined;
  service?: string | undefined;
  region?: string | undefined;
  cache?: Map<string, ArrayBuffer> | undefined;
  retries?: number | undefined;
  initRetryMs?: number | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class IamService {
  constructor() {}

  signRequest(
    url: string,
    method: string,
    headers: Record<string, any>,
    body?: string,
    queryParams?: any,
  ): Promise<any> {
    return Auth.currentCredentials()
      .then((credentials) => {
        let cred = Auth.essentialCredentials(credentials);
        return Promise.resolve(cred);
      })
      .then((essentialCredentials) => {
        let opts: IAWS4FetchOptions = {
          accessKeyId: essentialCredentials.accessKeyId,
          secretAccessKey: essentialCredentials.secretAccessKey,
          sessionToken: essentialCredentials.sessionToken,
          service: 'execute-api',
          region: 'us-east-2',
        };
        const aws = new AwsClient(opts);

        const request = aws.sign(url, {
          method: method,
          headers: headers,
          body: body,
        });

        return Promise.resolve(request);
      });
  }
}
