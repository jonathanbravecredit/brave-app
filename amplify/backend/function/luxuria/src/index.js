/* Amplify Params - DO NOT EDIT
	API_BRAVEAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_BRAVEAPP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
/* eslint-disable no-console */
require('es6-promise').polyfill();
require('isomorphic-fetch');
// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require('aws-sdk');
const AWSAppSyncClient = require('aws-appsync').default;
const { AUTH_TYPE } = require('aws-appsync');

const region = process.env.REGION;
AWS.config.update({
  region,
});
const appsyncUrl = process.env.API_BRAVEAPP_GRAPHQLAPIENDPOINTOUTPUT;
const gql = require('graphql-tag');

// graphql client.  We define it outside of the lambda function in order for it to be reused during subsequent calls
let client;

// used to parse different types of query results to return only the item.
function parseResults(operationName, data) {
  if (operationName.includes('List')) {
    return data[`l${operationName.substring(1, operationName.length)}`];
  }
  if (operationName.includes('GetOrders')) {
    return data[`g${operationName.substring(1, operationName.length)}`];
  }
  return data[operationName];
}

// initializes our graphql client
function initializeClient() {
  client = new AWSAppSyncClient({
    url: appsyncUrl,
    region,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: AWS.config.credentials,
    },
    disableOffline: true,
  });
}

// // generic mutation function.  A way to quickly reuse mutation statements
// async function executeMutation(mutation, operationName, variables) {
//   if (!client) {
//     initializeClient();
//   }

//   try {
//     const response = await client.mutate({
//       mutation: gql(mutation),
//       variables,
//       fetchPolicy: 'network-only',
//     });
//     return parseResults(operationName, response.data);
//   } catch (err) {
//     console.log('Error while trying to mutate data');
//     throw JSON.stringify(err);
//   }
// }

// generic query function.  A way to quickly reuse query statements
async function executeQuery(query, operationName, variables) {
  if (!client) {
    initializeClient();
  }
  try {
    const response = await client.query({
      query: gql(query),
      variables,
      fetchPolicy: 'network-only',
    });
    return parseResults(operationName, response.data);
  } catch (err) {
    console.log('Error while trying to fetch data');
    throw JSON.stringify(err);
  }
}

exports.handler = async (event) => {
  console.log('event', event); // logging so you can see what gets passed when you invoke it

  //   // updating a users firstName
  //   await executeMutation(
  //     `mutation updateUser($id: ID!) {
  //         updateUser(id: $id) {
  //       id
  //       firstName
  //      }
  //    }`,
  //     "updateOrder",
  //     {
  //       input: {
  //         id: "1234",
  //         firstName: "Bob"
  //       }
  //     }
  //   );

  // querying the user that we changed
  const user = await executeQuery(
    `query Transunion($action: String!, $message: String!) {
        transunion(action: $action, message: $message)
      }`,
    'ping',
    {
      action: 'Ping',
      message: '',
    },
  );

  return user;
};
