/* Amplify Params - DO NOT EDIT
	API_BRAVEAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_BRAVEAPP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { getDispute } from '@lib/queries/getDisputes';
import { AppSyncResolverEvent } from 'aws-lambda';

const resolvers = {
  Query: {
    getDisputes: (id: string) => {
      return getDispute(id);
    },
  },
};

export const handler: any = async (event: AppSyncResolverEvent<any>) => {
  console.log('evet ===> ', event);

  // const typeHandler = resolvers[event.typeName];
  // TODO implement
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
