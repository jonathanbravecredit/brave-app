export interface ISignInCognitoUser {
  challengeName: string;
  challengeParam: {
    requiredAttributes: unknown;
  };
}
