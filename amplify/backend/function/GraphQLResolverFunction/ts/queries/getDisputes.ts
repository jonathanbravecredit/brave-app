import { DynamoStore } from '@shiftcoders/dynamo-easy';
import * as AWS from 'aws-sdk';
import { UpdateItemOutput, PutItemOutput, DeleteItemOutput, Key } from 'aws-sdk/clients/dynamodb';
import { Disputes } from 'aws/api.service';
import { AppDataModel } from 'models/appdata.model';
import { returnNestedObject } from 'utils/utils';

const db = new AWS.DynamoDB();
const AppDataStore = new DynamoStore(AppDataModel);

export const getDispute = (id: string): Promise<Disputes> => {
  return AppDataStore.get(id)
    .exec()
    .then((res) => {
      const transunion = res?.agencies?.transunion;
      return transunion ? returnNestedObject(transunion, 'disputes') : null;
    })
    .catch((err) => err);
};
