import * as AWS from 'aws-sdk';
import { UpdateItemOutput } from 'aws-sdk/clients/dynamodb';
import { returnNestedObject } from 'lib/utils/helpers';
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const table = `AppData-${process.env.API_BRAVEAPP_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

/**
 *
 * @param id
 * @param {string} msg JSON string representing Dispute object TODO add in ajv...https://www.npmjs.com/package/ajv
 * @returns
 */
export const putDisputesInDB = (id: string, msg: string): Promise<UpdateItemOutput> => {
  let now = Date.now();
  let timeStamp = new Date(now);
  const disputes = JSON.parse(msg);
  const params = {
    TableName: table,
    Key: {
      id: id,
    },
    UpdateExpression: 'set #ag.#tu.#di = :di, #ua = :ua',
    ExpressionAttributeNames: {
      '#ag': 'agencies',
      '#tu': 'transunion',
      '#di': 'disputes',
      '#ua': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':di': disputes,
      ':ua': timeStamp.toISOString(),
    },
    ReturnValues: 'UPDATED_NEW',
  };

  return db
    .update(params)
    .promise()
    .then((res: UpdateItemOutput) => {
      const attrs = res.Attributes;
      const disputes = returnNestedObject(attrs, 'disputes');
      return disputes;
    })
    .catch((err) => err);
};
