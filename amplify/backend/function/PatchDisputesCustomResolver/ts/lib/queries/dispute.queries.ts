import * as AWS from 'aws-sdk';
import { GetItemOutput, UpdateItemOutput } from 'aws-sdk/clients/dynamodb';
import { AppData, DisputesInput } from 'lib/aws/api.types';
import { returnNestedObject } from 'lib/utils/helpers';
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const table = `AppData-${process.env.API_BRAVEAPP_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;

export const getDisputesFromDB = (id: string): Promise<GetItemOutput> => {
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

export const patchDisputesInDB = async (id: string, msg: string): Promise<UpdateItemOutput> => {
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
    UpdateExpression: 'set #ag.#tu.#di = :di, #ua = :ua',
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
    .then((res: UpdateItemOutput) => {
      const attrs = res.Attributes;
      const disputes = returnNestedObject(attrs, 'disputes');
      return disputes;
    })
    .catch((err) => err);
};
