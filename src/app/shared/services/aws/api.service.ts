/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateAppDataInput = {
  id?: string | null;
  user: UserInput;
  agencies: AgenciesInput;
};

export type UserInput = {
  id: string;
  userAttributes?: UserAttributesInput | null;
  onboarding?: OnboardingInput | null;
};

export type UserAttributesInput = {
  name?: NameInput | null;
  address?: AddressInput | null;
  phone?: PhoneInput | null;
  dob?: DobInput | null;
};

export type NameInput = {
  first: string;
  middle?: string | null;
  last: string;
};

export type AddressInput = {
  addressOne: string;
  addressTwo?: string | null;
  city: string;
  state: string;
  zip: string;
};

export type PhoneInput = {
  primary: string;
};

export type DobInput = {
  year: string;
  month: string;
  day: string;
};

export type OnboardingInput = {
  lastActive: number;
  lastComplete: number;
};

export type AgenciesInput = {
  transunion?: TransunionInput | null;
  equifax?: EquifaxInput | null;
  experian?: ExperianInput | null;
};

export type TransunionInput = {
  authenticated?: boolean | null;
};

export type EquifaxInput = {
  authenticated?: boolean | null;
};

export type ExperianInput = {
  authenticated?: boolean | null;
};

export type ModelAppDataConditionInput = {
  and?: Array<ModelAppDataConditionInput | null> | null;
  or?: Array<ModelAppDataConditionInput | null> | null;
  not?: ModelAppDataConditionInput | null;
};

export type AppData = {
  __typename: "AppData";
  id?: string;
  user?: User;
  agencies?: Agencies;
  createdAt?: string;
  updatedAt?: string;
};

export type User = {
  __typename: "User";
  id?: string;
  userAttributes?: UserAttributes;
  onboarding?: Onboarding;
};

export type UserAttributes = {
  __typename: "UserAttributes";
  name?: Name;
  address?: Address;
  phone?: Phone;
  dob?: Dob;
};

export type Name = {
  __typename: "Name";
  first?: string;
  middle?: string | null;
  last?: string;
};

export type Address = {
  __typename: "Address";
  addressOne?: string;
  addressTwo?: string | null;
  city?: string;
  state?: string;
  zip?: string;
};

export type Phone = {
  __typename: "Phone";
  primary?: string;
};

export type Dob = {
  __typename: "Dob";
  year?: string;
  month?: string;
  day?: string;
};

export type Onboarding = {
  __typename: "Onboarding";
  lastActive?: number;
  lastComplete?: number;
};

export type Agencies = {
  __typename: "Agencies";
  transunion?: Transunion;
  equifax?: Equifax;
  experian?: Experian;
};

export type Transunion = {
  __typename: "Transunion";
  authenticated?: boolean | null;
};

export type Equifax = {
  __typename: "Equifax";
  authenticated?: boolean | null;
};

export type Experian = {
  __typename: "Experian";
  authenticated?: boolean | null;
};

export type UpdateAppDataInput = {
  id: string;
  user?: UserInput | null;
  agencies?: AgenciesInput | null;
};

export type DeleteAppDataInput = {
  id: string;
};

export type ModelAppDataFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelAppDataFilterInput | null> | null;
  or?: Array<ModelAppDataFilterInput | null> | null;
  not?: ModelAppDataFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelAppDataConnection = {
  __typename: "ModelAppDataConnection";
  items?: Array<AppData | null> | null;
  nextToken?: string | null;
};

export type CreateAppDataMutation = {
  __typename: "AppData";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userAttributes?: {
      __typename: "UserAttributes";
      name?: {
        __typename: "Name";
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      dob?: {
        __typename: "Dob";
        year: string;
        month: string;
        day: string;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
    } | null;
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppDataMutation = {
  __typename: "AppData";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userAttributes?: {
      __typename: "UserAttributes";
      name?: {
        __typename: "Name";
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      dob?: {
        __typename: "Dob";
        year: string;
        month: string;
        day: string;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
    } | null;
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppDataMutation = {
  __typename: "AppData";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userAttributes?: {
      __typename: "UserAttributes";
      name?: {
        __typename: "Name";
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      dob?: {
        __typename: "Dob";
        year: string;
        month: string;
        day: string;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
    } | null;
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type GetAppDataQuery = {
  __typename: "AppData";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userAttributes?: {
      __typename: "UserAttributes";
      name?: {
        __typename: "Name";
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      dob?: {
        __typename: "Dob";
        year: string;
        month: string;
        day: string;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
    } | null;
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListAppDatasQuery = {
  __typename: "ModelAppDataConnection";
  items?: Array<{
    __typename: "AppData";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userAttributes?: {
        __typename: "UserAttributes";
        name?: {
          __typename: "Name";
          first: string;
          middle?: string | null;
          last: string;
        } | null;
        address?: {
          __typename: "Address";
          addressOne: string;
          addressTwo?: string | null;
          city: string;
          state: string;
          zip: string;
        } | null;
        phone?: {
          __typename: "Phone";
          primary: string;
        } | null;
        dob?: {
          __typename: "Dob";
          year: string;
          month: string;
          day: string;
        } | null;
      } | null;
      onboarding?: {
        __typename: "Onboarding";
        lastActive: number;
        lastComplete: number;
      } | null;
    };
    agencies: {
      __typename: "Agencies";
      transunion?: {
        __typename: "Transunion";
        authenticated?: boolean | null;
      } | null;
      equifax?: {
        __typename: "Equifax";
        authenticated?: boolean | null;
      } | null;
      experian?: {
        __typename: "Experian";
        authenticated?: boolean | null;
      } | null;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateAppDataSubscription = {
  __typename: "AppData";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userAttributes?: {
      __typename: "UserAttributes";
      name?: {
        __typename: "Name";
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      dob?: {
        __typename: "Dob";
        year: string;
        month: string;
        day: string;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
    } | null;
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppDataSubscription = {
  __typename: "AppData";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userAttributes?: {
      __typename: "UserAttributes";
      name?: {
        __typename: "Name";
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      dob?: {
        __typename: "Dob";
        year: string;
        month: string;
        day: string;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
    } | null;
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppDataSubscription = {
  __typename: "AppData";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userAttributes?: {
      __typename: "UserAttributes";
      name?: {
        __typename: "Name";
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: "Address";
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: "Phone";
        primary: string;
      } | null;
      dob?: {
        __typename: "Dob";
        year: string;
        month: string;
        day: string;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
    } | null;
    equifax?: {
      __typename: "Equifax";
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: "Experian";
      authenticated?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAppData(
    input: CreateAppDataInput,
    condition?: ModelAppDataConditionInput
  ): Promise<CreateAppDataMutation> {
    const statement = `mutation CreateAppData($input: CreateAppDataInput!, $condition: ModelAppDataConditionInput) {
        createAppData(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            userAttributes {
              __typename
              name {
                __typename
                first
                middle
                last
              }
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              phone {
                __typename
                primary
              }
              dob {
                __typename
                year
                month
                day
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
            }
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
          }
          createdAt
          updatedAt
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
  async UpdateAppData(
    input: UpdateAppDataInput,
    condition?: ModelAppDataConditionInput
  ): Promise<UpdateAppDataMutation> {
    const statement = `mutation UpdateAppData($input: UpdateAppDataInput!, $condition: ModelAppDataConditionInput) {
        updateAppData(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            userAttributes {
              __typename
              name {
                __typename
                first
                middle
                last
              }
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              phone {
                __typename
                primary
              }
              dob {
                __typename
                year
                month
                day
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
            }
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
          }
          createdAt
          updatedAt
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
  async DeleteAppData(
    input: DeleteAppDataInput,
    condition?: ModelAppDataConditionInput
  ): Promise<DeleteAppDataMutation> {
    const statement = `mutation DeleteAppData($input: DeleteAppDataInput!, $condition: ModelAppDataConditionInput) {
        deleteAppData(input: $input, condition: $condition) {
          __typename
          id
          user {
            __typename
            id
            userAttributes {
              __typename
              name {
                __typename
                first
                middle
                last
              }
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              phone {
                __typename
                primary
              }
              dob {
                __typename
                year
                month
                day
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
            }
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
          }
          createdAt
          updatedAt
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
  async GetAppData(id: string): Promise<GetAppDataQuery> {
    const statement = `query GetAppData($id: ID!) {
        getAppData(id: $id) {
          __typename
          id
          user {
            __typename
            id
            userAttributes {
              __typename
              name {
                __typename
                first
                middle
                last
              }
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              phone {
                __typename
                primary
              }
              dob {
                __typename
                year
                month
                day
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
            }
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
          }
          createdAt
          updatedAt
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
            id
            user {
              __typename
              id
              userAttributes {
                __typename
                name {
                  __typename
                  first
                  middle
                  last
                }
                address {
                  __typename
                  addressOne
                  addressTwo
                  city
                  state
                  zip
                }
                phone {
                  __typename
                  primary
                }
                dob {
                  __typename
                  year
                  month
                  day
                }
              }
              onboarding {
                __typename
                lastActive
                lastComplete
              }
            }
            agencies {
              __typename
              transunion {
                __typename
                authenticated
              }
              equifax {
                __typename
                authenticated
              }
              experian {
                __typename
                authenticated
              }
            }
            createdAt
            updatedAt
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
          id
          user {
            __typename
            id
            userAttributes {
              __typename
              name {
                __typename
                first
                middle
                last
              }
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              phone {
                __typename
                primary
              }
              dob {
                __typename
                year
                month
                day
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
            }
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAppDataSubscription>>;

  OnUpdateAppDataListener: Observable<
    SubscriptionResponse<OnUpdateAppDataSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppData {
        onUpdateAppData {
          __typename
          id
          user {
            __typename
            id
            userAttributes {
              __typename
              name {
                __typename
                first
                middle
                last
              }
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              phone {
                __typename
                primary
              }
              dob {
                __typename
                year
                month
                day
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
            }
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAppDataSubscription>>;

  OnDeleteAppDataListener: Observable<
    SubscriptionResponse<OnDeleteAppDataSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppData {
        onDeleteAppData {
          __typename
          id
          user {
            __typename
            id
            userAttributes {
              __typename
              name {
                __typename
                first
                middle
                last
              }
              address {
                __typename
                addressOne
                addressTwo
                city
                state
                zip
              }
              phone {
                __typename
                primary
              }
              dob {
                __typename
                year
                month
                day
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
            }
            equifax {
              __typename
              authenticated
            }
            experian {
              __typename
              authenticated
            }
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAppDataSubscription>>;
}
