import { GetLastRefreshedQuery, GetOwnerQuery } from '@shared/queries';
import { API, graphqlOperation } from '@aws-amplify/api';

/**
 * Owner is separate from user id
 *  - consider switching this for identity ids
 * @param id
 * @returns
 */
export const GetOwner = async (id: string): Promise<GetOwnerQuery> => {
  const statement = `query GetAppData($id: ID!) {
      getAppData(id: $id) {
        owner
      }
    }`;
  const gqlAPIServiceArguments: any = {
    id,
  };
  const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
  return <GetOwnerQuery>response.data.getAppData;
};

/**
 * Get the last time the credit report was refreshed
 * @param id
 * @returns
 */
export const GetLastRefreshed = async (id: string): Promise<GetLastRefreshedQuery> => {
  const statement = `query GetAppData($id: ID!) {
    getAppData(id: $id) {
      agencies {
        transunion {
          fulfilledOn
        }
      }
    }
  }`;
  const gqlAPIServiceArguments: any = {
    id,
  };
  const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
  return <GetLastRefreshedQuery>response.data.getAppData;
};
