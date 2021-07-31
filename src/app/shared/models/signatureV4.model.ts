// import { Injectable } from '@angular/core';
// import * as SHA256 from 'crypto-js/sha256';
// import * as encHex from 'crypto-js/enc-hex';
// import * as HmacSHA256 from 'crypto-js/hmac-sha256';

// export interface ISigV4Config {
//   accessKey: any;
//   secretKey: any;
//   sessionToken: any;
//   serviceName: string;
//   region: string;
//   defaultAcceptType: string;
//   defaultContentType: string;
//   endpoint: any;
// }

// export class SigV4 {
//   private AWS_SHA_256: string = 'AWS4-HMAC-SHA256';
//   private AWS4_REQUEST: string = 'aws4_request';
//   private AWS4: string = 'AWS4';
//   private X_AMZ_DATE: string = 'x-amz-date';
//   private X_AMZ_SECURITY_TOKEN: string = 'x-amz-security-token';
//   private HOST: string = 'host';
//   private AUTHORIZATION: string = 'Authorization';

//   public awsSigV4Client = {
//     accessKey: null,
//     secretKey: null,
//     sessionToken: null,
//     serviceName: null,
//     region: null,
//     defaultAcceptType: null,
//     defaultContentType: null,
//     endpoint: null,
//     pathComponent: null,
//   };

//   constructor(private config: ISigV4Config) {
//     if (config.accessKey === undefined || config.secretKey === undefined) {
//       return this;
//     }

//     this.awsSigV4Client.accessKey = config.accessKey;
//     this.awsSigV4Client.secretKey = config.secretKey;
//     this.awsSigV4Client.sessionToken = config.sessionToken;
//     this.awsSigV4Client.serviceName = config.serviceName || 'execute-api';
//     this.awsSigV4Client.region = config.region || 'us-east-1';
//     this.awsSigV4Client.defaultAcceptType = config.defaultAcceptType || 'application/json';
//     this.awsSigV4Client.defaultContentType = config.defaultContentType || 'application/json';

//     let invokeUrl = config.endpoint;
//     let endpoint = /(^https?:\/\/[^/]+)/g.exec(invokeUrl)[1];
//     let pathComponent = invokeUrl.substring(endpoint.length);

//     this.awsSigV4Client.endpoint = endpoint;
//     this.awsSigV4Client.pathComponent = pathComponent;

//     return this;
//   }

//   hash(value) {
//     return SHA256(value); // eslint-disable-line
//   }

//   hexEncode(value) {
//     return value.toString(encHex);
//   }

//   hmac(secret, value) {
//     return HmacSHA256(value, secret, { asBytes: true }); // eslint-disable-line
//   }

//   buildCanonicalRequest(method, path, queryParams, headers, payload) {
//     let canonicalUri = this.buildCanonicalUri(path);
//     let canonicalQueryString = this.buildCanonicalQueryString(queryParams);
//     let canonicalHeaders = this.buildCanonicalHeaders(headers);
//     let canonicalSignedHeaders = this.buildCanonicalSignedHeaders(headers);
//     let hex = this.hexEncode(this.hash(payload));

//     return (
//       method +
//       '\n' +
//       canonicalUri +
//       '\n' +
//       canonicalQueryString +
//       '\n' +
//       canonicalHeaders +
//       '\n' +
//       canonicalSignedHeaders +
//       '\n' +
//       hex
//     );
//   }

//   hashCanonicalRequest(request) {
//     return this.hexEncode(this.hash(request));
//   }

//   buildCanonicalUri(uri) {
//     return encodeURI(uri);
//   }

//   buildCanonicalQueryString(queryParams) {
//     if (Object.keys(queryParams).length < 1) {
//       return '';
//     }

//     let sortedQueryParams = [];
//     for (let property in queryParams) {
//       if (queryParams.hasOwnProperty(property)) {
//         sortedQueryParams.push(property);
//       }
//     }
//     sortedQueryParams.sort();

//     let canonicalQueryString = '';
//     for (let i = 0; i < sortedQueryParams.length; i++) {
//       canonicalQueryString += sortedQueryParams[i] + '=' + encodeURIComponent(queryParams[sortedQueryParams[i]]) + '&';
//     }
//     return canonicalQueryString.substr(0, canonicalQueryString.length - 1);
//   }

//   buildCanonicalHeaders(headers) {
//     let canonicalHeaders = '';
//     let sortedKeys = [];
//     for (let property in headers) {
//       if (headers.hasOwnProperty(property)) {
//         sortedKeys.push(property);
//       }
//     }
//     sortedKeys.sort();

//     for (let i = 0; i < sortedKeys.length; i++) {
//       canonicalHeaders += sortedKeys[i].toLowerCase() + ':' + headers[sortedKeys[i]] + '\n';
//     }
//     return canonicalHeaders;
//   }

//   buildCanonicalSignedHeaders(headers) {
//     let sortedKeys = [];
//     for (let property in headers) {
//       if (headers.hasOwnProperty(property)) {
//         sortedKeys.push(property.toLowerCase());
//       }
//     }
//     sortedKeys.sort();

//     return sortedKeys.join(';');
//   }

//   buildStringToSign(datetime, credentialScope, hashedCanonicalRequest) {
//     return this.AWS_SHA_256 + '\n' + datetime + '\n' + credentialScope + '\n' + hashedCanonicalRequest;
//   }

//   buildCredentialScope(datetime, region, service) {
//     return datetime.substr(0, 8) + '/' + region + '/' + service + '/' + this.AWS4_REQUEST;
//   }

//   calculateSigningKey(secretKey, datetime, region, service) {
//     return this.hmac(
//       this.hmac(this.hmac(this.hmac(this.AWS4 + secretKey, datetime.substr(0, 8)), region), service),
//       this.AWS4_REQUEST,
//     );
//   }

//   calculateSignature(key, stringToSign) {
//     return this.hexEncode(this.hmac(key, stringToSign));
//   }

//   extractHostname(url) {
//     let hostname;

//     if (url.indexOf('://') > -1) {
//       hostname = url.split('/')[2];
//     } else {
//       hostname = url.split('/')[0];
//     }

//     hostname = hostname.split(':')[0];
//     hostname = hostname.split('?')[0];

//     return hostname;
//   }

//   buildAuthorizationHeader(accessKey, credentialScope, headers, signature) {
//     return (
//       this.AWS_SHA_256 +
//       ' Credential=' +
//       accessKey +
//       '/' +
//       credentialScope +
//       ', SignedHeaders=' +
//       this.buildCanonicalSignedHeaders(headers) +
//       ', Signature=' +
//       signature
//     );
//   }

//   signRequest(request) {
//     const verb = request.method.toUpperCase();
//     const path = this.awsSigV4Client.pathComponent + request.path;
//     const queryParams = { ...request.queryParams };
//     const headers = { ...request.headers };

//     // If the user has not specified an override for Content type the use default
//     if (headers['Content-Type'] === undefined) {
//       headers['Content-Type'] = this.awsSigV4Client.defaultContentType;
//     }

//     // If the user has not specified an override for Accept type the use default
//     if (headers['Accept'] === undefined) {
//       headers['Accept'] = this.awsSigV4Client.defaultAcceptType;
//     }

//     let body = { ...request.body };

//     // override request body and set to empty when signing GET requests
//     if (request.body === undefined || verb === 'GET') {
//       body = '';
//     } else {
//       body = JSON.stringify(body);
//     }

//     // If there is no body remove the content-type header so it is not
//     // included in SigV4 calculation
//     if (body === '' || body === undefined || body === null) {
//       delete headers['Content-Type'];
//     }

//     let datetime = new Date()
//       .toISOString()
//       .replace(/\.\d{3}Z$/, 'Z')
//       .replace(/[:-]|\.\d{3}/g, '');
//     headers[this.X_AMZ_DATE] = datetime;
//     headers[this.HOST] = this.extractHostname(this.awsSigV4Client.endpoint);

//     let canonicalRequest = this.buildCanonicalRequest(verb, path, queryParams, headers, body);
//     let hashedCanonicalRequest = this.hashCanonicalRequest(canonicalRequest);
//     let credentialScope = this.buildCredentialScope(
//       datetime,
//       this.awsSigV4Client.region,
//       this.awsSigV4Client.serviceName,
//     );
//     let stringToSign = this.buildStringToSign(datetime, credentialScope, hashedCanonicalRequest);
//     let signingKey = this.calculateSigningKey(
//       this.awsSigV4Client.secretKey,
//       datetime,
//       this.awsSigV4Client.region,
//       this.awsSigV4Client.serviceName,
//     );
//     let signature = this.calculateSignature(signingKey, stringToSign);
//     headers[this.AUTHORIZATION] = this.buildAuthorizationHeader(
//       this.awsSigV4Client.accessKey,
//       credentialScope,
//       headers,
//       signature,
//     );
//     if (this.awsSigV4Client.sessionToken !== undefined && this.awsSigV4Client.sessionToken !== '') {
//       headers[this.X_AMZ_SECURITY_TOKEN] = this.awsSigV4Client.sessionToken;
//     }
//     delete headers[this.HOST];

//     let url = this.awsSigV4Client.endpoint + path;
//     let queryString = this.buildCanonicalQueryString(queryParams);
//     if (queryString !== '') {
//       url += '?' + queryString;
//     }

//     // Need to re-attach Content-Type if it is not specified at this point
//     if (headers['Content-Type'] === undefined) {
//       headers['Content-Type'] = this.awsSigV4Client.defaultContentType;
//     }

//     return {
//       headers: headers,
//       url: url,
//     };
//   }
// }
