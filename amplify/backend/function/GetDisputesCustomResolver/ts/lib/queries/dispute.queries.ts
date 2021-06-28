import * as AWS from 'aws-sdk';
import { GetItemOutput } from 'aws-sdk/clients/dynamodb';
import { AppData } from 'lib/aws/api.types';
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
