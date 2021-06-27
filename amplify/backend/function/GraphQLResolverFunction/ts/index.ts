/* Amplify Params - DO NOT EDIT
	API_BRAVEAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_BRAVEAPP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import { AWSError } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { PromiseResult } from 'aws-sdk/lib/request';
import { DisputesInput } from 'lib/aws/api.types';
import { IResolverEvent } from 'lib/interfaces/resolver.interface';
import { getDisputesFromDB, patchDisputesInDB, putDisputesInDB } from 'lib/queries/dispute.queries';

/**
 * Using this as the entry point, you can use a single function to handle many resolvers.
 */
const resolvers: Record<string, any> = {
  Query: {
    getDisputes: (id: string): Promise<PromiseResult<DocumentClient.GetItemOutput, AWSError>> => {
      return getDisputesFromDB(id);
    },
  },
  Mutation: {
    createDisputes: (id: string, disputes: DisputesInput) => {
      return putDisputesInDB(id, disputes);
    },
    patchDisputes: (id: string, disputes: Partial<DisputesInput>) => {
      return patchDisputesInDB(id, disputes);
    },
  },
};
/**
 *
 * @param {string} typeName ex: Query - Filled dynamically based on function usage location
 * @param {string} fieldName ex: getUser - Filled dynamically based on function usage location. Typically name of query
 * @param {Object} arguments GraphQL field arguments via $ctx.arguments
 * @param {Object} identity AppSync identity object via $ctx.identity
 * @param {Object} source The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object.
 * @param {Object} request AppSync request object. Contains things like headers.
 * @param {Object} prev If using the built-in pipeline resolver support, this contains the object returned by the previous function.
 * @returns
 */
export const handler: any = async (event: IResolverEvent) => {
  console.log('event ===> ', event);
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error('Resolver not found.');
};
