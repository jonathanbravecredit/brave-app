// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { Amplify, Auth } from 'aws-amplify';
Amplify.configure(Cypress.env('awsConfig'));

Cypress.Commands.add('signUp', (email, password) => {
  const log = Cypress.log({
    displayName: 'COGNITO SIGNUP',
    message: [`🔐 Signing Up | ${email}`],
    // @ts-ignore
    autoEnd: false,
  });

  log.snapshot('before');

  const signUp = Auth.signUp(email, password);
  cy.wrap(signUp).then((signUpResult) => {
    log.snapshot('after');
    log.end();
    return signUpResult;
  });
});
