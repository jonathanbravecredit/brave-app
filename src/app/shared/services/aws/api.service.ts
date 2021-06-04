/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type ModelAppDataConditionInput = {
  and?: Array<ModelAppDataConditionInput | null> | null;
  not?: ModelAppDataConditionInput | null;
  or?: Array<ModelAppDataConditionInput | null> | null;
};

export type CreateAppDataInput = {
  agencies: AgenciesInput;
  id?: string | null;
  user: UserInput;
};

export type AgenciesInput = {
  equifax?: EquifaxInput | null;
  experian?: ExperianInput | null;
  transunion?: TransunionInput | null;
};

export type EquifaxInput = {
  authenticated?: boolean | null;
};

export type ExperianInput = {
  authenticated?: boolean | null;
};

export type TransunionInput = {
  authenticated?: boolean | null;
};

export type UserInput = {
  id: string;
  onboarding?: OnboardingInput | null;
  userAttributes?: UserAttributesInput | null;
};

export type OnboardingInput = {
  lastActive: number;
  lastComplete: number;
};

export type UserAttributesInput = {
  address?: AddressInput | null;
  dob?: DobInput | null;
  name?: NameInput | null;
  phone?: PhoneInput | null;
  ssn?: SsnInput | null;
};

export type AddressInput = {
  addressOne: string;
  addressTwo?: string | null;
  city: string;
  state: string;
  zip: string;
};

export type DobInput = {
  day: string;
  month: string;
  year: string;
};

export type NameInput = {
  first: string;
  last: string;
  middle?: string | null;
};

export type PhoneInput = {
  primary: string;
};

export type SsnInput = {
  full?: string | null;
  lastfour: string;
};

export type AppData = {
  __typename: "AppData";
  agencies?: Agencies;
  createdAt?: string;
  id?: string;
  updatedAt?: string;
  user?: User;
};

export type Agencies = {
  __typename: "Agencies";
  equifax?: Equifax;
  experian?: Experian;
  transunion?: Transunion;
};

export type Equifax = {
  __typename: "Equifax";
  authenticated?: boolean | null;
};

export type Experian = {
  __typename: "Experian";
  authenticated?: boolean | null;
};

export type Transunion = {
  __typename: "Transunion";
  authenticated?: boolean | null;
  indicativeEnrichmentSuccess?: boolean | null;
};

export type User = {
  __typename: "User";
  id?: string;
  onboarding?: Onboarding;
  userAttributes?: UserAttributes;
};

export type Onboarding = {
  __typename: "Onboarding";
  lastActive?: number;
  lastComplete?: number;
};

export type UserAttributes = {
  __typename: "UserAttributes";
  address?: Address;
  dob?: Dob;
  name?: Name;
  phone?: Phone;
  ssn?: Ssn;
};

export type Address = {
  __typename: "Address";
  addressOne?: string;
  addressTwo?: string | null;
  city?: string;
  state?: string;
  zip?: string;
};

export type Dob = {
  __typename: "Dob";
  day?: string;
  month?: string;
  year?: string;
};

export type Name = {
  __typename: "Name";
  first?: string;
  last?: string;
  middle?: string | null;
};

export type Phone = {
  __typename: "Phone";
  primary?: string;
};

export type Ssn = {
  __typename: "Ssn";
  full?: string | null;
  lastfour?: string;
};

export type DeleteAppDataInput = {
  id: string;
};

export type UpdateAppDataInput = {
  agencies?: AgenciesInput | null;
  id: string;
  user?: UserInput | null;
};

export type ModelAppDataFilterInput = {
  and?: Array<ModelAppDataFilterInput | null> | null;
  id?: ModelIDInput | null;
  not?: ModelAppDataFilterInput | null;
  or?: Array<ModelAppDataFilterInput | null> | null;
};

export type ModelIDInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet"
}

export type ModelSizeInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ModelAppDataConnection = {
  __typename: "ModelAppDataConnection";
  items?: Array<AppData | null> | null;
  nextToken?: string | null;
};

export type CreateAppDataMutation = {
  __typename: "AppData";
  agencies: {
    __typename: "Agencies";
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
    } | null;
  };
  createdAt: string;
  id: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
    userAttributes?: {
      __typename: "UserAttributes";
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      dob?: {
        __typename: "Dob";
        day: string;
        month: string;
        year: string;
      } | null;
      name?: {
        __typename: "Name";
        first: string;
        last: string;
        middle?: string | null;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      ssn?: {
        __typename: "Ssn";
        full?: string | null;
        lastfour: string;
      } | null;
    } | null;
  };
};

export type DeleteAppDataMutation = {
  __typename: "AppData";
  agencies: {
    __typename: "Agencies";
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
    } | null;
  };
  createdAt: string;
  id: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
    userAttributes?: {
      __typename: "UserAttributes";
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      dob?: {
        __typename: "Dob";
        day: string;
        month: string;
        year: string;
      } | null;
      name?: {
        __typename: "Name";
        first: string;
        last: string;
        middle?: string | null;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      ssn?: {
        __typename: "Ssn";
        full?: string | null;
        lastfour: string;
      } | null;
    } | null;
  };
};

export type UpdateAppDataMutation = {
  __typename: "AppData";
  agencies: {
    __typename: "Agencies";
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
    } | null;
  };
  createdAt: string;
  id: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
    userAttributes?: {
      __typename: "UserAttributes";
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      dob?: {
        __typename: "Dob";
        day: string;
        month: string;
        year: string;
      } | null;
      name?: {
        __typename: "Name";
        first: string;
        last: string;
        middle?: string | null;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      ssn?: {
        __typename: "Ssn";
        full?: string | null;
        lastfour: string;
      } | null;
    } | null;
  };
};

export type GetAppDataQuery = {
  __typename: "AppData";
  agencies: {
    __typename: "Agencies";
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
    } | null;
  };
  createdAt: string;
  id: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
    userAttributes?: {
      __typename: "UserAttributes";
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      dob?: {
        __typename: "Dob";
        day: string;
        month: string;
        year: string;
      } | null;
      name?: {
        __typename: "Name";
        first: string;
        last: string;
        middle?: string | null;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      ssn?: {
        __typename: "Ssn";
        full?: string | null;
        lastfour: string;
      } | null;
    } | null;
  };
};

export type ListAppDatasQuery = {
  __typename: "ModelAppDataConnection";
  items?: Array<{
    __typename: "AppData";
    agencies: {
      __typename: "Agencies";
      equifax?: {
        __typename: "Equifax";
        authenticated?: boolean | null;
      } | null;
      experian?: {
        __typename: "Experian";
        authenticated?: boolean | null;
      } | null;
      transunion?: {
        __typename: "Transunion";
        authenticated?: boolean | null;
        indicativeEnrichmentSuccess?: boolean | null;
      } | null;
    };
    createdAt: string;
    id: string;
    updatedAt: string;
    user: {
      __typename: "User";
      id: string;
      onboarding?: {
        __typename: "Onboarding";
        lastActive: number;
        lastComplete: number;
      } | null;
      userAttributes?: {
        __typename: "UserAttributes";
        address?: {
          __typename: "Address";
          addressOne: string;
          addressTwo?: string | null;
          city: string;
          state: string;
          zip: string;
        } | null;
        dob?: {
          __typename: "Dob";
          day: string;
          month: string;
          year: string;
        } | null;
        name?: {
          __typename: "Name";
          first: string;
          last: string;
          middle?: string | null;
        } | null;
        phone?: {
          __typename: "Phone";
          primary: string;
        } | null;
        ssn?: {
          __typename: "Ssn";
          full?: string | null;
          lastfour: string;
        } | null;
      } | null;
    };
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateAppDataSubscription = {
  __typename: "AppData";
  agencies: {
    __typename: "Agencies";
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
    } | null;
  };
  createdAt: string;
  id: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
    userAttributes?: {
      __typename: "UserAttributes";
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      dob?: {
        __typename: "Dob";
        day: string;
        month: string;
        year: string;
      } | null;
      name?: {
        __typename: "Name";
        first: string;
        last: string;
        middle?: string | null;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      ssn?: {
        __typename: "Ssn";
        full?: string | null;
        lastfour: string;
      } | null;
    } | null;
  };
};

export type OnDeleteAppDataSubscription = {
  __typename: "AppData";
  agencies: {
    __typename: "Agencies";
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
    } | null;
  };
  createdAt: string;
  id: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
    userAttributes?: {
      __typename: "UserAttributes";
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      dob?: {
        __typename: "Dob";
        day: string;
        month: string;
        year: string;
      } | null;
      name?: {
        __typename: "Name";
        first: string;
        last: string;
        middle?: string | null;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      ssn?: {
        __typename: "Ssn";
        full?: string | null;
        lastfour: string;
      } | null;
    } | null;
  };
};

export type OnUpdateAppDataSubscription = {
  __typename: "AppData";
  agencies: {
    __typename: "Agencies";
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
    } | null;
  };
  createdAt: string;
  id: string;
  updatedAt: string;
  user: {
    __typename: "User";
    id: string;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
    userAttributes?: {
      __typename: "UserAttributes";
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      dob?: {
        __typename: "Dob";
        day: string;
        month: string;
        year: string;
      } | null;
      name?: {
        __typename: "Name";
        first: string;
        last: string;
        middle?: string | null;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      ssn?: {
        __typename: "Ssn";
        full?: string | null;
        lastfour: string;
      } | null;
    } | null;
  };
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAppData(
    input: CreateAppDataInput,
    condition?: ModelAppDataConditionInput
  ): Promise<CreateAppDataMutation> {
    const statement = `mutation CreateAppData($condition: ModelAppDataConditionInput, $input: CreateAppDataInput!) {
        createAppData(condition: $condition, input: $input) {
          __typename
          agencies {
            __typename
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
            }
          }
          createdAt
          id
          updatedAt
          user {
            __typename
            id
            onboarding {
              __typename
              lastActive
              lastComplete
            }
            userAttributes {
              __typename
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              dob {
                __typename
                day
                month
                year
              }
              name {
                __typename
                first
                last
                middle
              }
              phone {
                __typename
                primary
              }
              ssn {
                __typename
                full
                lastfour
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppDataMutation>response.data.createAppData;
  }
  async DeleteAppData(
    input: DeleteAppDataInput,
    condition?: ModelAppDataConditionInput
  ): Promise<DeleteAppDataMutation> {
    const statement = `mutation DeleteAppData($condition: ModelAppDataConditionInput, $input: DeleteAppDataInput!) {
        deleteAppData(condition: $condition, input: $input) {
          __typename
          agencies {
            __typename
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
            }
          }
          createdAt
          id
          updatedAt
          user {
            __typename
            id
            onboarding {
              __typename
              lastActive
              lastComplete
            }
            userAttributes {
              __typename
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              dob {
                __typename
                day
                month
                year
              }
              name {
                __typename
                first
                last
                middle
              }
              phone {
                __typename
                primary
              }
              ssn {
                __typename
                full
                lastfour
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppDataMutation>response.data.deleteAppData;
  }
  async UpdateAppData(
    input: UpdateAppDataInput,
    condition?: ModelAppDataConditionInput
  ): Promise<UpdateAppDataMutation> {
    const statement = `mutation UpdateAppData($condition: ModelAppDataConditionInput, $input: UpdateAppDataInput!) {
        updateAppData(condition: $condition, input: $input) {
          __typename
          agencies {
            __typename
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
            }
          }
          createdAt
          id
          updatedAt
          user {
            __typename
            id
            onboarding {
              __typename
              lastActive
              lastComplete
            }
            userAttributes {
              __typename
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              dob {
                __typename
                day
                month
                year
              }
              name {
                __typename
                first
                last
                middle
              }
              phone {
                __typename
                primary
              }
              ssn {
                __typename
                full
                lastfour
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppDataMutation>response.data.updateAppData;
  }
  async GetAppData(id: string): Promise<GetAppDataQuery> {
    const statement = `query GetAppData($id: ID!) {
        getAppData(id: $id) {
          __typename
          agencies {
            __typename
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
            }
          }
          createdAt
          id
          updatedAt
          user {
            __typename
            id
            onboarding {
              __typename
              lastActive
              lastComplete
            }
            userAttributes {
              __typename
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              dob {
                __typename
                day
                month
                year
              }
              name {
                __typename
                first
                last
                middle
              }
              phone {
                __typename
                primary
              }
              ssn {
                __typename
                full
                lastfour
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppDataQuery>response.data.getAppData;
  }
  async GetTUData(id: string): Promise<string | null> {
    const statement = `query GetTUData($id: ID!) {
        getTUData(id: $id)
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.getTUData;
  }
  async ListAppDatas(
    filter?: ModelAppDataFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppDatasQuery> {
    const statement = `query ListAppDatas($filter: ModelAppDataFilterInput, $limit: Int, $nextToken: String) {
        listAppDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            agencies {
              __typename
              equifax {
                __typename
                authenticated
              }
              experian {
                __typename
                authenticated
              }
              transunion {
                __typename
                authenticated
                indicativeEnrichmentSuccess
              }
            }
            createdAt
            id
            updatedAt
            user {
              __typename
              id
              onboarding {
                __typename
                lastActive
                lastComplete
              }
              userAttributes {
                __typename
                address {
                  __typename
                  addressOne
                  addressTwo
                  city
                  state
                  zip
                }
                dob {
                  __typename
                  day
                  month
                  year
                }
                name {
                  __typename
                  first
                  last
                  middle
                }
                phone {
                  __typename
                  primary
                }
                ssn {
                  __typename
                  full
                  lastfour
                }
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppDatasQuery>response.data.listAppDatas;
  }
  OnCreateAppDataListener: Observable<
    SubscriptionResponse<OnCreateAppDataSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppData {
        onCreateAppData {
          __typename
          agencies {
            __typename
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
            }
          }
          createdAt
          id
          updatedAt
          user {
            __typename
            id
            onboarding {
              __typename
              lastActive
              lastComplete
            }
            userAttributes {
              __typename
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              dob {
                __typename
                day
                month
                year
              }
              name {
                __typename
                first
                last
                middle
              }
              phone {
                __typename
                primary
              }
              ssn {
                __typename
                full
                lastfour
              }
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAppDataSubscription>>;

  OnDeleteAppDataListener: Observable<
    SubscriptionResponse<OnDeleteAppDataSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppData {
        onDeleteAppData {
          __typename
          agencies {
            __typename
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
            }
          }
          createdAt
          id
          updatedAt
          user {
            __typename
            id
            onboarding {
              __typename
              lastActive
              lastComplete
            }
            userAttributes {
              __typename
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              dob {
                __typename
                day
                month
                year
              }
              name {
                __typename
                first
                last
                middle
              }
              phone {
                __typename
                primary
              }
              ssn {
                __typename
                full
                lastfour
              }
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAppDataSubscription>>;

  OnUpdateAppDataListener: Observable<
    SubscriptionResponse<OnUpdateAppDataSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppData {
        onUpdateAppData {
          __typename
          agencies {
            __typename
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
            }
          }
          createdAt
          id
          updatedAt
          user {
            __typename
            id
            onboarding {
              __typename
              lastActive
              lastComplete
            }
            userAttributes {
              __typename
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              dob {
                __typename
                day
                month
                year
              }
              name {
                __typename
                first
                last
                middle
              }
              phone {
                __typename
                primary
              }
              ssn {
                __typename
                full
                lastfour
              }
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAppDataSubscription>>;
}
