/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type Transunion = {
  __typename: "Transunion";
  authenticated?: boolean | null;
  indicativeEnrichmentSuccess?: boolean | null;
  getAuthenticationQuestionsSuccess?: boolean | null;
  serviceBundleFulfillmentKey?: string | null;
  currentRawQuestions?: string | null;
  currentRawAuthDetails?: string | null;
  enrollmentKey?: string | null;
  enrollReport?: TUReportResponse;
  enrollMergeReport?: TUReportResponse;
  enrollVantageScore?: TUReportResponse;
  enrolled?: boolean | null;
  enrolledOn?: string | null;
  fulfillReport?: TUReportResponse;
  fulfillMergeReport?: TUReportResponse;
  fulfillVantageScore?: TUReportResponse;
  fulfilledOn?: string | null;
  acknowledgedDisputeTerms?: boolean | null;
  acknowledgedDisputeTermsOn?: string | null;
  disputeServiceBundleFulfillmentKey?: string | null;
  disputeEnrollmentKey?: string | null;
  disputeEnrolled?: boolean | null;
  disputeEnrolledOn?: string | null;
  disputeStatus?: string | null;
  disputes?: Array<Dispute | null> | null;
};

export type TUReportResponse = {
  __typename: "TUReportResponse";
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: string | null;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
};

export type Dispute = {
  __typename: "Dispute";
  id?: string;
  appDataId?: string;
  disputeId?: string | null;
  disputeStatus?: string | null;
  disputeLetterCode?: string | null;
  disputeLetterContent?: string | null;
  openDisputes?: string | null;
  agencyName?: string | null;
  openedOn?: string | null;
  closedOn?: string | null;
  disputeItems?: string | null;
  disputeResults?: string | null;
  notificationStatus?: string | null;
  notificationMessage?: string | null;
  notificationSentOn?: string | null;
};

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
  enrollReport?: TUReportResponseInput | null;
  enrollMergeReport?: TUReportResponseInput | null;
  enrollVantageScore?: TUReportResponseInput | null;
  enrolled?: boolean | null;
  enrolledOn?: string | null;
  fulfillReport?: TUReportResponseInput | null;
  fulfillMergeReport?: TUReportResponseInput | null;
  fulfillVantageScore?: TUReportResponseInput | null;
  fulfilledOn?: string | null;
  acknowledgedDisputeTerms?: boolean | null;
  acknowledgedDisputeTermsOn?: string | null;
  disputeServiceBundleFulfillmentKey?: string | null;
  disputeEnrollmentKey?: string | null;
  disputeEnrolled?: boolean | null;
  disputeEnrolledOn?: string | null;
  disputeStatus?: string | null;
  disputes?: Array<DisputeInput | null> | null;
};

export type TUReportResponseInput = {
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: string | null;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
};

export type DisputeInput = {
  id: string;
  appDataId: string;
  disputeId?: string | null;
  disputeStatus?: string | null;
  disputeLetterCode?: string | null;
  disputeLetterContent?: string | null;
  openDisputes?: string | null;
  agencyName?: string | null;
  openedOn?: string | null;
  closedOn?: string | null;
  disputeItems?: string | null;
  disputeResults?: string | null;
  notificationStatus?: string | null;
  notificationMessage?: string | null;
  notificationSentOn?: string | null;
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
  __typename: "AppData";
  id?: string;
  user?: User;
  agencies?: Agencies;
  preferences?: Preferences;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
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
  ssn?: Ssn;
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

export type Ssn = {
  __typename: "Ssn";
  lastfour?: string;
  full?: string | null;
};

export type Onboarding = {
  __typename: "Onboarding";
  lastActive?: number;
  lastComplete?: number;
  started?: boolean | null;
};

export type Agencies = {
  __typename: "Agencies";
  transunion?: Transunion;
  equifax?: Equifax;
  experian?: Experian;
};

export type Equifax = {
  __typename: "Equifax";
  authenticated?: boolean | null;
};

export type Experian = {
  __typename: "Experian";
  authenticated?: boolean | null;
};

export type Preferences = {
  __typename: "Preferences";
  showAllAccounts?: ShowAccountsPreference;
};

export type ShowAccountsPreference = {
  __typename: "ShowAccountsPreference";
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

export type PatchTransunionMutation = {
  __typename: "Transunion";
  authenticated?: boolean | null;
  indicativeEnrichmentSuccess?: boolean | null;
  getAuthenticationQuestionsSuccess?: boolean | null;
  serviceBundleFulfillmentKey?: string | null;
  currentRawQuestions?: string | null;
  currentRawAuthDetails?: string | null;
  enrollmentKey?: string | null;
  enrollReport?: {
    __typename: "TUReportResponse";
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
    __typename: "TUReportResponse";
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
    __typename: "TUReportResponse";
    bureau?: string | null;
    errorResponse?: string | null;
    serviceProduct?: string | null;
    serviceProductFullfillmentKey?: string | null;
    serviceProductObject?: string | null;
    serviceProductTypeId?: string | null;
    serviceProductValue?: string | null;
    status?: string | null;
  } | null;
  enrolled?: boolean | null;
  enrolledOn?: string | null;
  fulfillReport?: {
    __typename: "TUReportResponse";
    bureau?: string | null;
    errorResponse?: string | null;
    serviceProduct?: string | null;
    serviceProductFullfillmentKey?: string | null;
    serviceProductObject?: string | null;
    serviceProductTypeId?: string | null;
    serviceProductValue?: string | null;
    status?: string | null;
  } | null;
  fulfillMergeReport?: {
    __typename: "TUReportResponse";
    bureau?: string | null;
    errorResponse?: string | null;
    serviceProduct?: string | null;
    serviceProductFullfillmentKey?: string | null;
    serviceProductObject?: string | null;
    serviceProductTypeId?: string | null;
    serviceProductValue?: string | null;
    status?: string | null;
  } | null;
  fulfillVantageScore?: {
    __typename: "TUReportResponse";
    bureau?: string | null;
    errorResponse?: string | null;
    serviceProduct?: string | null;
    serviceProductFullfillmentKey?: string | null;
    serviceProductObject?: string | null;
    serviceProductTypeId?: string | null;
    serviceProductValue?: string | null;
    status?: string | null;
  } | null;
  fulfilledOn?: string | null;
  acknowledgedDisputeTerms?: boolean | null;
  acknowledgedDisputeTermsOn?: string | null;
  disputeServiceBundleFulfillmentKey?: string | null;
  disputeEnrollmentKey?: string | null;
  disputeEnrolled?: boolean | null;
  disputeEnrolledOn?: string | null;
  disputeStatus?: string | null;
  disputes?: Array<{
    __typename: "Dispute";
    id: string;
    appDataId: string;
    disputeId?: string | null;
    disputeStatus?: string | null;
    disputeLetterCode?: string | null;
    disputeLetterContent?: string | null;
    openDisputes?: string | null;
    agencyName?: string | null;
    openedOn?: string | null;
    closedOn?: string | null;
    disputeItems?: string | null;
    disputeResults?: string | null;
    notificationStatus?: string | null;
    notificationMessage?: string | null;
    notificationSentOn?: string | null;
  } | null> | null;
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
      ssn?: {
        __typename: "Ssn";
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrolled?: boolean | null;
      enrolledOn?: string | null;
      fulfillReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillMergeReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillVantageScore?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfilledOn?: string | null;
      acknowledgedDisputeTerms?: boolean | null;
      acknowledgedDisputeTermsOn?: string | null;
      disputeServiceBundleFulfillmentKey?: string | null;
      disputeEnrollmentKey?: string | null;
      disputeEnrolled?: boolean | null;
      disputeEnrolledOn?: string | null;
      disputeStatus?: string | null;
      disputes?: Array<{
        __typename: "Dispute";
        id: string;
        appDataId: string;
        disputeId?: string | null;
        disputeStatus?: string | null;
        disputeLetterCode?: string | null;
        disputeLetterContent?: string | null;
        openDisputes?: string | null;
        agencyName?: string | null;
        openedOn?: string | null;
        closedOn?: string | null;
        disputeItems?: string | null;
        disputeResults?: string | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: string | null;
      } | null> | null;
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
  preferences: {
    __typename: "Preferences";
    showAllAccounts?: {
      __typename: "ShowAccountsPreference";
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
      ssn?: {
        __typename: "Ssn";
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrolled?: boolean | null;
      enrolledOn?: string | null;
      fulfillReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillMergeReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillVantageScore?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfilledOn?: string | null;
      acknowledgedDisputeTerms?: boolean | null;
      acknowledgedDisputeTermsOn?: string | null;
      disputeServiceBundleFulfillmentKey?: string | null;
      disputeEnrollmentKey?: string | null;
      disputeEnrolled?: boolean | null;
      disputeEnrolledOn?: string | null;
      disputeStatus?: string | null;
      disputes?: Array<{
        __typename: "Dispute";
        id: string;
        appDataId: string;
        disputeId?: string | null;
        disputeStatus?: string | null;
        disputeLetterCode?: string | null;
        disputeLetterContent?: string | null;
        openDisputes?: string | null;
        agencyName?: string | null;
        openedOn?: string | null;
        closedOn?: string | null;
        disputeItems?: string | null;
        disputeResults?: string | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: string | null;
      } | null> | null;
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
  preferences: {
    __typename: "Preferences";
    showAllAccounts?: {
      __typename: "ShowAccountsPreference";
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
      ssn?: {
        __typename: "Ssn";
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrolled?: boolean | null;
      enrolledOn?: string | null;
      fulfillReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillMergeReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillVantageScore?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfilledOn?: string | null;
      acknowledgedDisputeTerms?: boolean | null;
      acknowledgedDisputeTermsOn?: string | null;
      disputeServiceBundleFulfillmentKey?: string | null;
      disputeEnrollmentKey?: string | null;
      disputeEnrolled?: boolean | null;
      disputeEnrolledOn?: string | null;
      disputeStatus?: string | null;
      disputes?: Array<{
        __typename: "Dispute";
        id: string;
        appDataId: string;
        disputeId?: string | null;
        disputeStatus?: string | null;
        disputeLetterCode?: string | null;
        disputeLetterContent?: string | null;
        openDisputes?: string | null;
        agencyName?: string | null;
        openedOn?: string | null;
        closedOn?: string | null;
        disputeItems?: string | null;
        disputeResults?: string | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: string | null;
      } | null> | null;
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
  preferences: {
    __typename: "Preferences";
    showAllAccounts?: {
      __typename: "ShowAccountsPreference";
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
      ssn?: {
        __typename: "Ssn";
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrolled?: boolean | null;
      enrolledOn?: string | null;
      fulfillReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillMergeReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillVantageScore?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfilledOn?: string | null;
      acknowledgedDisputeTerms?: boolean | null;
      acknowledgedDisputeTermsOn?: string | null;
      disputeServiceBundleFulfillmentKey?: string | null;
      disputeEnrollmentKey?: string | null;
      disputeEnrolled?: boolean | null;
      disputeEnrolledOn?: string | null;
      disputeStatus?: string | null;
      disputes?: Array<{
        __typename: "Dispute";
        id: string;
        appDataId: string;
        disputeId?: string | null;
        disputeStatus?: string | null;
        disputeLetterCode?: string | null;
        disputeLetterContent?: string | null;
        openDisputes?: string | null;
        agencyName?: string | null;
        openedOn?: string | null;
        closedOn?: string | null;
        disputeItems?: string | null;
        disputeResults?: string | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: string | null;
      } | null> | null;
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
  preferences: {
    __typename: "Preferences";
    showAllAccounts?: {
      __typename: "ShowAccountsPreference";
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
        ssn?: {
          __typename: "Ssn";
          lastfour: string;
          full?: string | null;
        } | null;
      } | null;
      onboarding?: {
        __typename: "Onboarding";
        lastActive: number;
        lastComplete: number;
        started?: boolean | null;
      } | null;
    };
    agencies: {
      __typename: "Agencies";
      transunion?: {
        __typename: "Transunion";
        authenticated?: boolean | null;
        indicativeEnrichmentSuccess?: boolean | null;
        getAuthenticationQuestionsSuccess?: boolean | null;
        serviceBundleFulfillmentKey?: string | null;
        currentRawQuestions?: string | null;
        currentRawAuthDetails?: string | null;
        enrollmentKey?: string | null;
        enrollReport?: {
          __typename: "TUReportResponse";
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
          __typename: "TUReportResponse";
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
          __typename: "TUReportResponse";
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: string | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
        enrolled?: boolean | null;
        enrolledOn?: string | null;
        fulfillReport?: {
          __typename: "TUReportResponse";
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: string | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
        fulfillMergeReport?: {
          __typename: "TUReportResponse";
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: string | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
        fulfillVantageScore?: {
          __typename: "TUReportResponse";
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: string | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
        fulfilledOn?: string | null;
        acknowledgedDisputeTerms?: boolean | null;
        acknowledgedDisputeTermsOn?: string | null;
        disputeServiceBundleFulfillmentKey?: string | null;
        disputeEnrollmentKey?: string | null;
        disputeEnrolled?: boolean | null;
        disputeEnrolledOn?: string | null;
        disputeStatus?: string | null;
        disputes?: Array<{
          __typename: "Dispute";
          id: string;
          appDataId: string;
          disputeId?: string | null;
          disputeStatus?: string | null;
          disputeLetterCode?: string | null;
          disputeLetterContent?: string | null;
          openDisputes?: string | null;
          agencyName?: string | null;
          openedOn?: string | null;
          closedOn?: string | null;
          disputeItems?: string | null;
          disputeResults?: string | null;
          notificationStatus?: string | null;
          notificationMessage?: string | null;
          notificationSentOn?: string | null;
        } | null> | null;
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
    preferences: {
      __typename: "Preferences";
      showAllAccounts?: {
        __typename: "ShowAccountsPreference";
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
      ssn?: {
        __typename: "Ssn";
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrolled?: boolean | null;
      enrolledOn?: string | null;
      fulfillReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillMergeReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillVantageScore?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfilledOn?: string | null;
      acknowledgedDisputeTerms?: boolean | null;
      acknowledgedDisputeTermsOn?: string | null;
      disputeServiceBundleFulfillmentKey?: string | null;
      disputeEnrollmentKey?: string | null;
      disputeEnrolled?: boolean | null;
      disputeEnrolledOn?: string | null;
      disputeStatus?: string | null;
      disputes?: Array<{
        __typename: "Dispute";
        id: string;
        appDataId: string;
        disputeId?: string | null;
        disputeStatus?: string | null;
        disputeLetterCode?: string | null;
        disputeLetterContent?: string | null;
        openDisputes?: string | null;
        agencyName?: string | null;
        openedOn?: string | null;
        closedOn?: string | null;
        disputeItems?: string | null;
        disputeResults?: string | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: string | null;
      } | null> | null;
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
  preferences: {
    __typename: "Preferences";
    showAllAccounts?: {
      __typename: "ShowAccountsPreference";
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
      ssn?: {
        __typename: "Ssn";
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrolled?: boolean | null;
      enrolledOn?: string | null;
      fulfillReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillMergeReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillVantageScore?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfilledOn?: string | null;
      acknowledgedDisputeTerms?: boolean | null;
      acknowledgedDisputeTermsOn?: string | null;
      disputeServiceBundleFulfillmentKey?: string | null;
      disputeEnrollmentKey?: string | null;
      disputeEnrolled?: boolean | null;
      disputeEnrolledOn?: string | null;
      disputeStatus?: string | null;
      disputes?: Array<{
        __typename: "Dispute";
        id: string;
        appDataId: string;
        disputeId?: string | null;
        disputeStatus?: string | null;
        disputeLetterCode?: string | null;
        disputeLetterContent?: string | null;
        openDisputes?: string | null;
        agencyName?: string | null;
        openedOn?: string | null;
        closedOn?: string | null;
        disputeItems?: string | null;
        disputeResults?: string | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: string | null;
      } | null> | null;
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
  preferences: {
    __typename: "Preferences";
    showAllAccounts?: {
      __typename: "ShowAccountsPreference";
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
      ssn?: {
        __typename: "Ssn";
        lastfour: string;
        full?: string | null;
      } | null;
    } | null;
    onboarding?: {
      __typename: "Onboarding";
      lastActive: number;
      lastComplete: number;
      started?: boolean | null;
    } | null;
  };
  agencies: {
    __typename: "Agencies";
    transunion?: {
      __typename: "Transunion";
      authenticated?: boolean | null;
      indicativeEnrichmentSuccess?: boolean | null;
      getAuthenticationQuestionsSuccess?: boolean | null;
      serviceBundleFulfillmentKey?: string | null;
      currentRawQuestions?: string | null;
      currentRawAuthDetails?: string | null;
      enrollmentKey?: string | null;
      enrollReport?: {
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
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
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrolled?: boolean | null;
      enrolledOn?: string | null;
      fulfillReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillMergeReport?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfillVantageScore?: {
        __typename: "TUReportResponse";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: string | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      fulfilledOn?: string | null;
      acknowledgedDisputeTerms?: boolean | null;
      acknowledgedDisputeTermsOn?: string | null;
      disputeServiceBundleFulfillmentKey?: string | null;
      disputeEnrollmentKey?: string | null;
      disputeEnrolled?: boolean | null;
      disputeEnrolledOn?: string | null;
      disputeStatus?: string | null;
      disputes?: Array<{
        __typename: "Dispute";
        id: string;
        appDataId: string;
        disputeId?: string | null;
        disputeStatus?: string | null;
        disputeLetterCode?: string | null;
        disputeLetterContent?: string | null;
        openDisputes?: string | null;
        agencyName?: string | null;
        openedOn?: string | null;
        closedOn?: string | null;
        disputeItems?: string | null;
        disputeResults?: string | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: string | null;
      } | null> | null;
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
  preferences: {
    __typename: "Preferences";
    showAllAccounts?: {
      __typename: "ShowAccountsPreference";
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

@Injectable({
  providedIn: "root"
})
export class APIService {
  async PatchTransunion(
    id: string,
    msg?: string
  ): Promise<PatchTransunionMutation> {
    const statement = `mutation PatchTransunion($id: ID!, $msg: String) {
        patchTransunion(id: $id, msg: $msg) {
          __typename
          authenticated
          indicativeEnrichmentSuccess
          getAuthenticationQuestionsSuccess
          serviceBundleFulfillmentKey
          currentRawQuestions
          currentRawAuthDetails
          enrollmentKey
          enrollReport {
            __typename
            bureau
            errorResponse
            serviceProduct
            serviceProductFullfillmentKey
            serviceProductObject
            serviceProductTypeId
            serviceProductValue
            status
          }
          enrollMergeReport {
            __typename
            bureau
            errorResponse
            serviceProduct
            serviceProductFullfillmentKey
            serviceProductObject
            serviceProductTypeId
            serviceProductValue
            status
          }
          enrollVantageScore {
            __typename
            bureau
            errorResponse
            serviceProduct
            serviceProductFullfillmentKey
            serviceProductObject
            serviceProductTypeId
            serviceProductValue
            status
          }
          enrolled
          enrolledOn
          fulfillReport {
            __typename
            bureau
            errorResponse
            serviceProduct
            serviceProductFullfillmentKey
            serviceProductObject
            serviceProductTypeId
            serviceProductValue
            status
          }
          fulfillMergeReport {
            __typename
            bureau
            errorResponse
            serviceProduct
            serviceProductFullfillmentKey
            serviceProductObject
            serviceProductTypeId
            serviceProductValue
            status
          }
          fulfillVantageScore {
            __typename
            bureau
            errorResponse
            serviceProduct
            serviceProductFullfillmentKey
            serviceProductObject
            serviceProductTypeId
            serviceProductValue
            status
          }
          fulfilledOn
          acknowledgedDisputeTerms
          acknowledgedDisputeTermsOn
          disputeServiceBundleFulfillmentKey
          disputeEnrollmentKey
          disputeEnrolled
          disputeEnrolledOn
          disputeStatus
          disputes {
            __typename
            id
            appDataId
            disputeId
            disputeStatus
            disputeLetterCode
            disputeLetterContent
            openDisputes
            agencyName
            openedOn
            closedOn
            disputeItems
            disputeResults
            notificationStatus
            notificationMessage
            notificationSentOn
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    if (msg) {
      gqlAPIServiceArguments.msg = msg;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <PatchTransunionMutation>response.data.patchTransunion;
  }
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
              ssn {
                __typename
                lastfour
                full
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
              started
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
              getAuthenticationQuestionsSuccess
              serviceBundleFulfillmentKey
              currentRawQuestions
              currentRawAuthDetails
              enrollmentKey
              enrollReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrolled
              enrolledOn
              fulfillReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfilledOn
              acknowledgedDisputeTerms
              acknowledgedDisputeTermsOn
              disputeServiceBundleFulfillmentKey
              disputeEnrollmentKey
              disputeEnrolled
              disputeEnrolledOn
              disputeStatus
              disputes {
                __typename
                id
                appDataId
                disputeId
                disputeStatus
                disputeLetterCode
                disputeLetterContent
                openDisputes
                agencyName
                openedOn
                closedOn
                disputeItems
                disputeResults
                notificationStatus
                notificationMessage
                notificationSentOn
              }
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
          preferences {
            __typename
            showAllAccounts {
              __typename
              creditCards
              collectionsAccounts
              installmentLoans
              mortgages
            }
          }
          createdAt
          updatedAt
          owner
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
              ssn {
                __typename
                lastfour
                full
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
              started
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
              getAuthenticationQuestionsSuccess
              serviceBundleFulfillmentKey
              currentRawQuestions
              currentRawAuthDetails
              enrollmentKey
              enrollReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrolled
              enrolledOn
              fulfillReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfilledOn
              acknowledgedDisputeTerms
              acknowledgedDisputeTermsOn
              disputeServiceBundleFulfillmentKey
              disputeEnrollmentKey
              disputeEnrolled
              disputeEnrolledOn
              disputeStatus
              disputes {
                __typename
                id
                appDataId
                disputeId
                disputeStatus
                disputeLetterCode
                disputeLetterContent
                openDisputes
                agencyName
                openedOn
                closedOn
                disputeItems
                disputeResults
                notificationStatus
                notificationMessage
                notificationSentOn
              }
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
          preferences {
            __typename
            showAllAccounts {
              __typename
              creditCards
              collectionsAccounts
              installmentLoans
              mortgages
            }
          }
          createdAt
          updatedAt
          owner
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
              ssn {
                __typename
                lastfour
                full
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
              started
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
              getAuthenticationQuestionsSuccess
              serviceBundleFulfillmentKey
              currentRawQuestions
              currentRawAuthDetails
              enrollmentKey
              enrollReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrolled
              enrolledOn
              fulfillReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfilledOn
              acknowledgedDisputeTerms
              acknowledgedDisputeTermsOn
              disputeServiceBundleFulfillmentKey
              disputeEnrollmentKey
              disputeEnrolled
              disputeEnrolledOn
              disputeStatus
              disputes {
                __typename
                id
                appDataId
                disputeId
                disputeStatus
                disputeLetterCode
                disputeLetterContent
                openDisputes
                agencyName
                openedOn
                closedOn
                disputeItems
                disputeResults
                notificationStatus
                notificationMessage
                notificationSentOn
              }
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
          preferences {
            __typename
            showAllAccounts {
              __typename
              creditCards
              collectionsAccounts
              installmentLoans
              mortgages
            }
          }
          createdAt
          updatedAt
          owner
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
  async Transunion(action: string, message: string): Promise<string | null> {
    const statement = `query Transunion($action: String!, $message: String!) {
        transunion(action: $action, message: $message)
      }`;
    const gqlAPIServiceArguments: any = {
      action,
      message
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.transunion;
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
              ssn {
                __typename
                lastfour
                full
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
              started
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
              getAuthenticationQuestionsSuccess
              serviceBundleFulfillmentKey
              currentRawQuestions
              currentRawAuthDetails
              enrollmentKey
              enrollReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrolled
              enrolledOn
              fulfillReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfilledOn
              acknowledgedDisputeTerms
              acknowledgedDisputeTermsOn
              disputeServiceBundleFulfillmentKey
              disputeEnrollmentKey
              disputeEnrolled
              disputeEnrolledOn
              disputeStatus
              disputes {
                __typename
                id
                appDataId
                disputeId
                disputeStatus
                disputeLetterCode
                disputeLetterContent
                openDisputes
                agencyName
                openedOn
                closedOn
                disputeItems
                disputeResults
                notificationStatus
                notificationMessage
                notificationSentOn
              }
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
          preferences {
            __typename
            showAllAccounts {
              __typename
              creditCards
              collectionsAccounts
              installmentLoans
              mortgages
            }
          }
          createdAt
          updatedAt
          owner
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
                ssn {
                  __typename
                  lastfour
                  full
                }
              }
              onboarding {
                __typename
                lastActive
                lastComplete
                started
              }
            }
            agencies {
              __typename
              transunion {
                __typename
                authenticated
                indicativeEnrichmentSuccess
                getAuthenticationQuestionsSuccess
                serviceBundleFulfillmentKey
                currentRawQuestions
                currentRawAuthDetails
                enrollmentKey
                enrollReport {
                  __typename
                  bureau
                  errorResponse
                  serviceProduct
                  serviceProductFullfillmentKey
                  serviceProductObject
                  serviceProductTypeId
                  serviceProductValue
                  status
                }
                enrollMergeReport {
                  __typename
                  bureau
                  errorResponse
                  serviceProduct
                  serviceProductFullfillmentKey
                  serviceProductObject
                  serviceProductTypeId
                  serviceProductValue
                  status
                }
                enrollVantageScore {
                  __typename
                  bureau
                  errorResponse
                  serviceProduct
                  serviceProductFullfillmentKey
                  serviceProductObject
                  serviceProductTypeId
                  serviceProductValue
                  status
                }
                enrolled
                enrolledOn
                fulfillReport {
                  __typename
                  bureau
                  errorResponse
                  serviceProduct
                  serviceProductFullfillmentKey
                  serviceProductObject
                  serviceProductTypeId
                  serviceProductValue
                  status
                }
                fulfillMergeReport {
                  __typename
                  bureau
                  errorResponse
                  serviceProduct
                  serviceProductFullfillmentKey
                  serviceProductObject
                  serviceProductTypeId
                  serviceProductValue
                  status
                }
                fulfillVantageScore {
                  __typename
                  bureau
                  errorResponse
                  serviceProduct
                  serviceProductFullfillmentKey
                  serviceProductObject
                  serviceProductTypeId
                  serviceProductValue
                  status
                }
                fulfilledOn
                acknowledgedDisputeTerms
                acknowledgedDisputeTermsOn
                disputeServiceBundleFulfillmentKey
                disputeEnrollmentKey
                disputeEnrolled
                disputeEnrolledOn
                disputeStatus
                disputes {
                  __typename
                  id
                  appDataId
                  disputeId
                  disputeStatus
                  disputeLetterCode
                  disputeLetterContent
                  openDisputes
                  agencyName
                  openedOn
                  closedOn
                  disputeItems
                  disputeResults
                  notificationStatus
                  notificationMessage
                  notificationSentOn
                }
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
            preferences {
              __typename
              showAllAccounts {
                __typename
                creditCards
                collectionsAccounts
                installmentLoans
                mortgages
              }
            }
            createdAt
            updatedAt
            owner
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
  OnCreateAppDataListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnCreateAppDataSubscription>> {
    const statement = `subscription OnCreateAppData($owner: String) {
        onCreateAppData(owner: $owner) {
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
              ssn {
                __typename
                lastfour
                full
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
              started
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
              getAuthenticationQuestionsSuccess
              serviceBundleFulfillmentKey
              currentRawQuestions
              currentRawAuthDetails
              enrollmentKey
              enrollReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrolled
              enrolledOn
              fulfillReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfilledOn
              acknowledgedDisputeTerms
              acknowledgedDisputeTermsOn
              disputeServiceBundleFulfillmentKey
              disputeEnrollmentKey
              disputeEnrolled
              disputeEnrolledOn
              disputeStatus
              disputes {
                __typename
                id
                appDataId
                disputeId
                disputeStatus
                disputeLetterCode
                disputeLetterContent
                openDisputes
                agencyName
                openedOn
                closedOn
                disputeItems
                disputeResults
                notificationStatus
                notificationMessage
                notificationSentOn
              }
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
          preferences {
            __typename
            showAllAccounts {
              __typename
              creditCards
              collectionsAccounts
              installmentLoans
              mortgages
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateAppDataSubscription>>;
  }

  OnUpdateAppDataListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnUpdateAppDataSubscription>> {
    const statement = `subscription OnUpdateAppData($owner: String) {
        onUpdateAppData(owner: $owner) {
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
              ssn {
                __typename
                lastfour
                full
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
              started
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
              getAuthenticationQuestionsSuccess
              serviceBundleFulfillmentKey
              currentRawQuestions
              currentRawAuthDetails
              enrollmentKey
              enrollReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrolled
              enrolledOn
              fulfillReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfilledOn
              acknowledgedDisputeTerms
              acknowledgedDisputeTermsOn
              disputeServiceBundleFulfillmentKey
              disputeEnrollmentKey
              disputeEnrolled
              disputeEnrolledOn
              disputeStatus
              disputes {
                __typename
                id
                appDataId
                disputeId
                disputeStatus
                disputeLetterCode
                disputeLetterContent
                openDisputes
                agencyName
                openedOn
                closedOn
                disputeItems
                disputeResults
                notificationStatus
                notificationMessage
                notificationSentOn
              }
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
          preferences {
            __typename
            showAllAccounts {
              __typename
              creditCards
              collectionsAccounts
              installmentLoans
              mortgages
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateAppDataSubscription>>;
  }

  OnDeleteAppDataListener(
    owner?: string
  ): Observable<SubscriptionResponse<OnDeleteAppDataSubscription>> {
    const statement = `subscription OnDeleteAppData($owner: String) {
        onDeleteAppData(owner: $owner) {
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
              ssn {
                __typename
                lastfour
                full
              }
            }
            onboarding {
              __typename
              lastActive
              lastComplete
              started
            }
          }
          agencies {
            __typename
            transunion {
              __typename
              authenticated
              indicativeEnrichmentSuccess
              getAuthenticationQuestionsSuccess
              serviceBundleFulfillmentKey
              currentRawQuestions
              currentRawAuthDetails
              enrollmentKey
              enrollReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrollVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              enrolled
              enrolledOn
              fulfillReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillMergeReport {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfillVantageScore {
                __typename
                bureau
                errorResponse
                serviceProduct
                serviceProductFullfillmentKey
                serviceProductObject
                serviceProductTypeId
                serviceProductValue
                status
              }
              fulfilledOn
              acknowledgedDisputeTerms
              acknowledgedDisputeTermsOn
              disputeServiceBundleFulfillmentKey
              disputeEnrollmentKey
              disputeEnrolled
              disputeEnrolledOn
              disputeStatus
              disputes {
                __typename
                id
                appDataId
                disputeId
                disputeStatus
                disputeLetterCode
                disputeLetterContent
                openDisputes
                agencyName
                openedOn
                closedOn
                disputeItems
                disputeResults
                notificationStatus
                notificationMessage
                notificationSentOn
              }
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
          preferences {
            __typename
            showAllAccounts {
              __typename
              creditCards
              collectionsAccounts
              installmentLoans
              mortgages
            }
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnDeleteAppDataSubscription>>;
  }
}
