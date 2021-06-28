import * as AWS from 'aws-sdk';
import { GetItemInput, GetItemOutput, PutItemInput } from 'aws-sdk/clients/dynamodb';
import { PromiseResult } from 'aws-sdk/lib/request';
import { AppData, Disputes, DisputesInput } from 'lib/aws/api.types';
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const table = `AppData-${process.env.API_BRAVEAPP_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

export const getDisputesFromDB = (
  id: string,
): Promise<PromiseResult<AWS.DynamoDB.DocumentClient.GetItemOutput, AWS.AWSError>> => {
  //look up the id and return only those disputes
  const params = {
    TableName: table,
    Key: {
      id: id,
    },
  };
  return db
    .get(params)
    .promise()
    .then((res: GetItemOutput) => {
      const item: AppData = (res.Item as unknown) as AppData;
      return item ? item.agencies?.transunion?.disputes : null;
    })
    .catch((err) => err);
};

/**
 *
 * @param id
 * @param {string} msg JSON string representing Dispute object TODO add in ajv...https://www.npmjs.com/package/ajv
 * @returns
 */
export const putDisputesInDB = (
  id: string,
  msg: string,
): Promise<PromiseResult<AWS.DynamoDB.DocumentClient.PutItemInput, AWS.AWSError>> => {
  let now = Date.now();
  let timeStamp = new Date(now);
  const disputes = JSON.parse(msg);
  const params = {
    TableName: table,
    Key: {
      id: id,
    },
    UpdateExpression: 'set #ag.#tu#.#di = :di, #ua = :ua',
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
    .then((res) => res)
    .catch((err) => err);
};

export const patchDisputesInDB = async (
  id: string,
  msg: string,
): Promise<PromiseResult<AWS.DynamoDB.DocumentClient.PutItemInput, AWS.AWSError>> => {
  let now = Date.now();
  let timeStamp = new Date(now);
  const getParams = {
    TableName: table,
    Key: {
      id: id,
    },
  };
  const disputes = JSON.parse(msg);
  let patched: DisputesInput = {} as DisputesInput;
  try {
    const prior = await getDisputesFromDB(id);
    patched = {
      ...prior,
      ...disputes,
    };
  } catch (err) {
    throw new Error('Error fetching prior state of disputes');
  }

  const updateParams = {
    TableName: table,
    Key: {
      id: id,
    },
    UpdateExpression: 'set #ag.#tu#.#di = :di, #ua = :ua',
    ExpressionAttributeNames: {
      '#ag': 'agencies',
      '#tu': 'transunion',
      '#di': 'disputes',
      '#ua': 'updatedAt',
    },
    ExpressionAttributeValues: {
      ':di': patched,
      ':ua': timeStamp.toISOString(),
    },
    ReturnValues: 'UPDATED_NEW',
  };

  return db
    .update(updateParams)
    .promise()
    .then((res) => res)
    .catch((err) => err);
};
