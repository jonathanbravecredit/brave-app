/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
import awsConfig from '../../src/aws-exports';
import { CognitoIdentityServiceProvider } from 'aws-sdk';
process.env.AWS_PROFILE = 'seed-development-v1';
const cognito = new CognitoIdentityServiceProvider({ apiVersion: '2016-04-19', region: 'us-east-2' });

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  on('task', {
    async 'cognito:reset'() {
      const listParams = {
        UserPoolId: awsConfig.aws_user_pools_id,
        Filter: 'email = "cypress-one@brave.credit"',
      };
      const users = await cognito.listUsers(listParams).promise();
      console.log('users:', users);
      const user = users.Users ? users.Users[0] : null;
      if (!user) return null;
      const deleteParams = {
        UserPoolId: awsConfig.aws_user_pools_id,
        Username: user.Username,
      };
      const res = await cognito.adminDeleteUser(deleteParams).promise();
      console.log('reset:res ', res);
      return res;
    },

    async 'cognito:confirm'(username) {
      const params = {
        UserPoolId: awsConfig.aws_user_pools_id,
        Username: username,
      };
      const res = await cognito.adminConfirmSignUp(params).promise();
      console.log('confirm:res ', res);
      return res;
    },
  });
  on('after:run', (results) => {});
  // `config` is the resolved Cypress config
  config.env.cognito_username = 'cypress-nodelete@brave.credit';
  config.env.cognito_password = '$Brave123';
  config.env.awsConfig = awsConfig;

  return config;
};
