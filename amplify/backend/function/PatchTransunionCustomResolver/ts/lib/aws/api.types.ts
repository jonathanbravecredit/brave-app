/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAppDataInput = {
  id?: string | null;
  user: UserInput;
  agencies: AgenciesInput;
  preferences: PreferencesInput;
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
  ssn?: SsnInput | null;
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

export type SsnInput = {
  lastfour: string;
  full?: string | null;
};

export type OnboardingInput = {
  lastActive: number;
  lastComplete: number;
  started?: boolean | null;
};

export type AgenciesInput = {
  transunion?: TransunionInput | null;
  equifax?: EquifaxInput | null;
  experian?: ExperianInput | null;
};

export type TransunionInput = {
  authenticated?: boolean | null;
  indicativeEnrichmentSuccess?: boolean | null;
  getAuthenticationQuestionsSuccess?: boolean | null;
  serviceBundleFulfillmentKey?: string | null;
  currentRawQuestions?: string | null;
  currentRawAuthDetails?: string | null;
  enrollmentKey?: string | null;
  enrollReport?: TUEnrollResponseInput | null;
  enrollMergeReport?: TUEnrollResponseInput | null;
  enrollVantageScore?: TUEnrollResponseInput | null;
  disputes?: DisputesInput | null;
};

export type TUEnrollResponseInput = {
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: string | null;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
};

export type DisputesInput = {
  disputePreflightStatus?: string | null;
  disputeInflightStatus?: string | null;
  disputeEligibility?: string | null;
  disputeResults?: string | null;
  disputeHistory?: Array<string | null> | null;
  modifiedOn?: number | null;
  createdOn?: number | null;
  notificationStatus?: string | null;
  notificationMessage?: string | null;
  notificationSentOn?: number | null;
};

export type EquifaxInput = {
  authenticated?: boolean | null;
};

export type ExperianInput = {
  authenticated?: boolean | null;
};

export type PreferencesInput = {
  showAllAccounts?: ShowAccountsPreferenceInput | null;
};

export type ShowAccountsPreferenceInput = {
  creditCards?: boolean | null;
  collectionsAccounts?: boolean | null;
  installmentLoans?: boolean | null;
  mortgages?: boolean | null;
};

export type ModelAppDataConditionInput = {
  and?: Array<ModelAppDataConditionInput | null> | null;
  or?: Array<ModelAppDataConditionInput | null> | null;
  not?: ModelAppDataConditionInput | null;
};

export type AppData = {
  __typename: 'AppData';
  id?: string;
  user?: User;
  agencies?: Agencies;
  preferences?: Preferences;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type User = {
  __typename: 'User';
  id?: string;
  userAttributes?: UserAttributes;
  onboarding?: Onboarding;
};

export type UserAttributes = {
  __typename: 'UserAttributes';
  name?: Name;
  address?: Address;
  phone?: Phone;
  dob?: Dob;
  ssn?: Ssn;
};

export type Name = {
  __typename: 'Name';
  first?: string;
  middle?: string | null;
  last?: string;
};

export type Address = {
  __typename: 'Address';
  addressOne?: string;
  addressTwo?: string | null;
  city?: string;
  state?: string;
  zip?: string;
};

export type Phone = {
  __typename: 'Phone';
  primary?: string;
};

export type Dob = {
  __typename: 'Dob';
  year?: string;
  month?: string;
  day?: string;
};

export type Ssn = {
  __typename: 'Ssn';
  lastfour?: string;
  full?: string | null;
};

export type Onboarding = {
  __typename: 'Onboarding';
  lastActive?: number;
  lastComplete?: number;
  started?: boolean | null;
};

export type Agencies = {
  __typename: 'Agencies';
  transunion?: Transunion;
  equifax?: Equifax;
  experian?: Experian;
};

export type Transunion = {
  __typename: 'Transunion';
  authenticated?: boolean | null;
  indicativeEnrichmentSuccess?: boolean | null;
  getAuthenticationQuestionsSuccess?: boolean | null;
  serviceBundleFulfillmentKey?: string | null;
  currentRawQuestions?: string | null;
  currentRawAuthDetails?: string | null;
  enrollmentKey?: string | null;
  enrollReport?: TUEnrollResponse;
  enrollMergeReport?: TUEnrollResponse;
  enrollVantageScore?: TUEnrollResponse;
  disputes?: Disputes;
};

export type TUEnrollResponse = {
  __typename: 'TUEnrollResponse';
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: string | null;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
};

export type Disputes = {
  __typename: 'Disputes';
  disputePreflightStatus?: string | null;
  disputeInflightStatus?: string | null;
  disputeEligibility?: string | null;
  disputeResults?: string | null;
  disputeHistory?: Array<string | null> | null;
  modifiedOn?: number | null;
  createdOn?: number | null;
  notificationStatus?: string | null;
  notificationMessage?: string | null;
  notificationSentOn?: number | null;
};

export type Equifax = {
  __typename: 'Equifax';
  authenticated?: boolean | null;
};

export type Experian = {
  __typename: 'Experian';
  authenticated?: boolean | null;
};

export type Preferences = {
  __typename: 'Preferences';
  showAllAccounts?: ShowAccountsPreference;
};

export type ShowAccountsPreference = {
  __typename: 'ShowAccountsPreference';
  creditCards?: boolean | null;
  collectionsAccounts?: boolean | null;
  installmentLoans?: boolean | null;
  mortgages?: boolean | null;
};

export type UpdateAppDataInput = {
  id: string;
  user?: UserInput | null;
  agencies?: AgenciesInput | null;
  preferences?: PreferencesInput | null;
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
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
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
  __typename: 'ModelAppDataConnection';
  items?: Array<AppData | null> | null;
  nextToken?: string | null;
};

export type CreateAppDataMutation = {
  __typename: 'AppData';
  id: string;
  user: {
    __typename: 'User';
    id: string;
    userAttributes?: {
      __typename: 'UserAttributes';
      name?: {
        __typename: 'Name';
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: 'Address';
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: 'Phone';
        primary: string;
      } | null;
      dob?: {
        __typename: 'Dob';
        year: string;
        month: string;
        day: string;
      } | null;
      ssn?: {
        __typename: 'Ssn';
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: 'Onboarding';
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: 'Agencies';
    transunion?: {
      __typename: 'Transunion';
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollMergeReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      disputes?: {
        __typename: 'Disputes';
        disputePreflightStatus?: string | null;
        disputeInflightStatus?: string | null;
        disputeEligibility?: string | null;
        disputeResults?: string | null;
        disputeHistory?: Array<string | null> | null;
        modifiedOn?: number | null;
        createdOn?: number | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: number | null;
      } | null;
    } | null;
    equifax?: {
      __typename: 'Equifax';
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: 'Experian';
      authenticated?: boolean | null;
    } | null;
  };
  preferences: {
    __typename: 'Preferences';
    showAllAccounts?: {
      __typename: 'ShowAccountsPreference';
      creditCards?: boolean | null;
      collectionsAccounts?: boolean | null;
      installmentLoans?: boolean | null;
      mortgages?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateAppDataMutation = {
  __typename: 'AppData';
  id: string;
  user: {
    __typename: 'User';
    id: string;
    userAttributes?: {
      __typename: 'UserAttributes';
      name?: {
        __typename: 'Name';
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: 'Address';
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: 'Phone';
        primary: string;
      } | null;
      dob?: {
        __typename: 'Dob';
        year: string;
        month: string;
        day: string;
      } | null;
      ssn?: {
        __typename: 'Ssn';
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: 'Onboarding';
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: 'Agencies';
    transunion?: {
      __typename: 'Transunion';
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollMergeReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      disputes?: {
        __typename: 'Disputes';
        disputePreflightStatus?: string | null;
        disputeInflightStatus?: string | null;
        disputeEligibility?: string | null;
        disputeResults?: string | null;
        disputeHistory?: Array<string | null> | null;
        modifiedOn?: number | null;
        createdOn?: number | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: number | null;
      } | null;
    } | null;
    equifax?: {
      __typename: 'Equifax';
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: 'Experian';
      authenticated?: boolean | null;
    } | null;
  };
  preferences: {
    __typename: 'Preferences';
    showAllAccounts?: {
      __typename: 'ShowAccountsPreference';
      creditCards?: boolean | null;
      collectionsAccounts?: boolean | null;
      installmentLoans?: boolean | null;
      mortgages?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteAppDataMutation = {
  __typename: 'AppData';
  id: string;
  user: {
    __typename: 'User';
    id: string;
    userAttributes?: {
      __typename: 'UserAttributes';
      name?: {
        __typename: 'Name';
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: 'Address';
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: 'Phone';
        primary: string;
      } | null;
      dob?: {
        __typename: 'Dob';
        year: string;
        month: string;
        day: string;
      } | null;
      ssn?: {
        __typename: 'Ssn';
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: 'Onboarding';
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: 'Agencies';
    transunion?: {
      __typename: 'Transunion';
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollMergeReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      disputes?: {
        __typename: 'Disputes';
        disputePreflightStatus?: string | null;
        disputeInflightStatus?: string | null;
        disputeEligibility?: string | null;
        disputeResults?: string | null;
        disputeHistory?: Array<string | null> | null;
        modifiedOn?: number | null;
        createdOn?: number | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: number | null;
      } | null;
    } | null;
    equifax?: {
      __typename: 'Equifax';
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: 'Experian';
      authenticated?: boolean | null;
    } | null;
  };
  preferences: {
    __typename: 'Preferences';
    showAllAccounts?: {
      __typename: 'ShowAccountsPreference';
      creditCards?: boolean | null;
      collectionsAccounts?: boolean | null;
      installmentLoans?: boolean | null;
      mortgages?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type GetAppDataQuery = {
  __typename: 'AppData';
  id: string;
  user: {
    __typename: 'User';
    id: string;
    userAttributes?: {
      __typename: 'UserAttributes';
      name?: {
        __typename: 'Name';
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: 'Address';
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: 'Phone';
        primary: string;
      } | null;
      dob?: {
        __typename: 'Dob';
        year: string;
        month: string;
        day: string;
      } | null;
      ssn?: {
        __typename: 'Ssn';
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: 'Onboarding';
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: 'Agencies';
    transunion?: {
      __typename: 'Transunion';
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollMergeReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      disputes?: {
        __typename: 'Disputes';
        disputePreflightStatus?: string | null;
        disputeInflightStatus?: string | null;
        disputeEligibility?: string | null;
        disputeResults?: string | null;
        disputeHistory?: Array<string | null> | null;
        modifiedOn?: number | null;
        createdOn?: number | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: number | null;
      } | null;
    } | null;
    equifax?: {
      __typename: 'Equifax';
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: 'Experian';
      authenticated?: boolean | null;
    } | null;
  };
  preferences: {
    __typename: 'Preferences';
    showAllAccounts?: {
      __typename: 'ShowAccountsPreference';
      creditCards?: boolean | null;
      collectionsAccounts?: boolean | null;
      installmentLoans?: boolean | null;
      mortgages?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListAppDatasQuery = {
  __typename: 'ModelAppDataConnection';
  items?: Array<{
    __typename: 'AppData';
    id: string;
    user: {
      __typename: 'User';
      id: string;
      userAttributes?: {
        __typename: 'UserAttributes';
        name?: {
          __typename: 'Name';
          first: string;
          middle?: string | null;
          last: string;
        } | null;
        address?: {
          __typename: 'Address';
          addressOne: string;
          addressTwo?: string | null;
          city: string;
          state: string;
          zip: string;
        } | null;
        phone?: {
          __typename: 'Phone';
          primary: string;
        } | null;
        dob?: {
          __typename: 'Dob';
          year: string;
          month: string;
          day: string;
        } | null;
        ssn?: {
          __typename: 'Ssn';
          lastfour: string;
          full?: string | null;
        } | null;
      } | null;
      onboarding?: {
        __typename: 'Onboarding';
        lastActive: number;
        lastComplete: number;
        started?: boolean | null;
      } | null;
    };
    agencies: {
      __typename: 'Agencies';
      transunion?: {
        __typename: 'Transunion';
        authenticated?: boolean | null;
        indicativeEnrichmentSuccess?: boolean | null;
        getAuthenticationQuestionsSuccess?: boolean | null;
        serviceBundleFulfillmentKey?: string | null;
        currentRawQuestions?: string | null;
        currentRawAuthDetails?: string | null;
        enrollmentKey?: string | null;
        enrollReport?: {
          __typename: 'TUEnrollResponse';
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: string | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
        enrollMergeReport?: {
          __typename: 'TUEnrollResponse';
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: string | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
        enrollVantageScore?: {
          __typename: 'TUEnrollResponse';
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: string | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
        disputes?: {
          __typename: 'Disputes';
          disputePreflightStatus?: string | null;
          disputeInflightStatus?: string | null;
          disputeEligibility?: string | null;
          disputeResults?: string | null;
          disputeHistory?: Array<string | null> | null;
          modifiedOn?: number | null;
          createdOn?: number | null;
          notificationStatus?: string | null;
          notificationMessage?: string | null;
          notificationSentOn?: number | null;
        } | null;
      } | null;
      equifax?: {
        __typename: 'Equifax';
        authenticated?: boolean | null;
      } | null;
      experian?: {
        __typename: 'Experian';
        authenticated?: boolean | null;
      } | null;
    };
    preferences: {
      __typename: 'Preferences';
      showAllAccounts?: {
        __typename: 'ShowAccountsPreference';
        creditCards?: boolean | null;
        collectionsAccounts?: boolean | null;
        installmentLoans?: boolean | null;
        mortgages?: boolean | null;
      } | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateAppDataSubscription = {
  __typename: 'AppData';
  id: string;
  user: {
    __typename: 'User';
    id: string;
    userAttributes?: {
      __typename: 'UserAttributes';
      name?: {
        __typename: 'Name';
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: 'Address';
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: 'Phone';
        primary: string;
      } | null;
      dob?: {
        __typename: 'Dob';
        year: string;
        month: string;
        day: string;
      } | null;
      ssn?: {
        __typename: 'Ssn';
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: 'Onboarding';
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: 'Agencies';
    transunion?: {
      __typename: 'Transunion';
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollMergeReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      disputes?: {
        __typename: 'Disputes';
        disputePreflightStatus?: string | null;
        disputeInflightStatus?: string | null;
        disputeEligibility?: string | null;
        disputeResults?: string | null;
        disputeHistory?: Array<string | null> | null;
        modifiedOn?: number | null;
        createdOn?: number | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: number | null;
      } | null;
    } | null;
    equifax?: {
      __typename: 'Equifax';
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: 'Experian';
      authenticated?: boolean | null;
    } | null;
  };
  preferences: {
    __typename: 'Preferences';
    showAllAccounts?: {
      __typename: 'ShowAccountsPreference';
      creditCards?: boolean | null;
      collectionsAccounts?: boolean | null;
      installmentLoans?: boolean | null;
      mortgages?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateAppDataSubscription = {
  __typename: 'AppData';
  id: string;
  user: {
    __typename: 'User';
    id: string;
    userAttributes?: {
      __typename: 'UserAttributes';
      name?: {
        __typename: 'Name';
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: 'Address';
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: 'Phone';
        primary: string;
      } | null;
      dob?: {
        __typename: 'Dob';
        year: string;
        month: string;
        day: string;
      } | null;
      ssn?: {
        __typename: 'Ssn';
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: 'Onboarding';
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: 'Agencies';
    transunion?: {
      __typename: 'Transunion';
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollMergeReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      disputes?: {
        __typename: 'Disputes';
        disputePreflightStatus?: string | null;
        disputeInflightStatus?: string | null;
        disputeEligibility?: string | null;
        disputeResults?: string | null;
        disputeHistory?: Array<string | null> | null;
        modifiedOn?: number | null;
        createdOn?: number | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: number | null;
      } | null;
    } | null;
    equifax?: {
      __typename: 'Equifax';
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: 'Experian';
      authenticated?: boolean | null;
    } | null;
  };
  preferences: {
    __typename: 'Preferences';
    showAllAccounts?: {
      __typename: 'ShowAccountsPreference';
      creditCards?: boolean | null;
      collectionsAccounts?: boolean | null;
      installmentLoans?: boolean | null;
      mortgages?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteAppDataSubscription = {
  __typename: 'AppData';
  id: string;
  user: {
    __typename: 'User';
    id: string;
    userAttributes?: {
      __typename: 'UserAttributes';
      name?: {
        __typename: 'Name';
        first: string;
        middle?: string | null;
        last: string;
      } | null;
      address?: {
        __typename: 'Address';
        addressOne: string;
        addressTwo?: string | null;
        city: string;
        state: string;
        zip: string;
      } | null;
      phone?: {
        __typename: 'Phone';
        primary: string;
      } | null;
      dob?: {
        __typename: 'Dob';
        year: string;
        month: string;
        day: string;
      } | null;
      ssn?: {
        __typename: 'Ssn';
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: 'Onboarding';
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: 'Agencies';
    transunion?: {
      __typename: 'Transunion';
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollMergeReport?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: 'TUEnrollResponse';
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      disputes?: {
        __typename: 'Disputes';
        disputePreflightStatus?: string | null;
        disputeInflightStatus?: string | null;
        disputeEligibility?: string | null;
        disputeResults?: string | null;
        disputeHistory?: Array<string | null> | null;
        modifiedOn?: number | null;
        createdOn?: number | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: number | null;
      } | null;
    } | null;
    equifax?: {
      __typename: 'Equifax';
      authenticated?: boolean | null;
    } | null;
    experian?: {
      __typename: 'Experian';
      authenticated?: boolean | null;
    } | null;
  };
  preferences: {
    __typename: 'Preferences';
    showAllAccounts?: {
      __typename: 'ShowAccountsPreference';
      creditCards?: boolean | null;
      collectionsAccounts?: boolean | null;
      installmentLoans?: boolean | null;
      mortgages?: boolean | null;
    } | null;
  };
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};
