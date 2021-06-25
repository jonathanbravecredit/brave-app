"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const getDisputes_1 = require("./lib/queries/getDisputes");
/**
 * Using this as the entry point, you can use a single function to handle many resolvers.
 */
const resolvers = {
    Query: {
        getDisputes: async (id) => {
            return await getDisputes_1.getDispute(id);
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
const handler = async (event) => {
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
exports.handler = handler;
