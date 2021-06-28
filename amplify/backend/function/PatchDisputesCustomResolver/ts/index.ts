/* Amplify Params - DO NOT EDIT
	API_BRAVEAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_BRAVEAPP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
import { IResolverEvent } from 'lib/interfaces/resolver.interface';
import { patchDisputesInDB } from 'lib/queries/dispute.queries';

/**
 * Using this as the entry point, you can use a single function to handle many resolvers.
 */
const resolvers: Record<string, any> = {
  Mutation: {
    patchDisputes: async (event: IResolverEvent) => {
      try {
        return await patchDisputesInDB(event.arguments.id, event.arguments.msg);
      } catch (err) {
        throw new Error(`Error in getDisputes, Error:${err}`);
      }
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
      try {
        const results = await resolver(event);
        console.log('results', results);
        return results;
      } catch (err) {
        throw new Error(`Resolver failed; error:${err}`);
      }
    }
  }
  throw new Error('Resolver not found.');
};
