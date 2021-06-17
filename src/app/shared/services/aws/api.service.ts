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

export type TUEnrollMergeReportInput = {
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: MergeReportInput | null;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
};

export type MergeReportInput = {
  TrueLinkCreditReportType?: TrueLinkCreditReportTypeInput | null;
};

export type TrueLinkCreditReportTypeInput = {
  SB168Frozen?: string | null;
  Borrower?: BorrowerInput | null;
  TradeLinePartition?: Array<TradeLinePartitionInput | null> | null;
  InquiryPartition?: InquiryPartitionInput | null;
  Message?: Array<MessageInput | null> | null;
  Summary?: SummaryInput | null;
};

export type BorrowerInput = {
  BorrowerAddress?: BorrowerAddressInput | null;
  Birth?: BorrowerBirthInput | null;
  CreditScore?: BorrowerCreditScoreInput | null;
  SocialPartition?: BorrowerSocialPartitionInput | null;
};

export type BorrowerAddressInput = {
  CreditAddress?: string | null;
  Dwelling?: string | null;
  Origin?: string | null;
  Ownership?: string | null;
  Source?: SourceInput | null;
};

export type SourceInput = {
  BorrowerKey?: string | null;
  Bureau?: string | null;
  InquiryDate?: string | null;
  Reference?: string | null;
};

export type BorrowerBirthInput = {
  BirthDate?: string | null;
  Source?: SourceInput | null;
};

export type BorrowerCreditScoreInput = {
  CreditScoreFactor?: Array<CreditScoreFactorInput | null> | null;
  CreditScoreMode?: string | null;
  NoScoreReason?: string | null;
  Source?: SourceInput | null;
};

export type CreditScoreFactorInput = {
  Factor?: string | null;
  FactorText?: Array<string | null> | null;
};

export type BorrowerSocialPartitionInput = {
  Social?: BorrowerSocialPartitionSocialInput | null;
};

export type BorrowerSocialPartitionSocialInput = {
  SocialSecurityNumber?: string | null;
  Source?: SourceInput | null;
};

export type TradeLinePartitionInput = {
  Tradeline?: TradelinePartitionTradelineInput | null;
};

export type TradelinePartitionTradelineInput = {
  AccountCondition?: string | null;
  AccountDesignator?: string | null;
  DisputeFlag?: string | null;
  IndustryCode?: string | null;
  OpenClosed?: string | null;
  PayStatus?: string | null;
  VerificationIndicator?: string | null;
  Remark?: TradelineRemarkInput | null;
  GrantedTrade?: TradelineGrantedTradeInput | null;
  Source?: SourceInput | null;
};

export type TradelineRemarkInput = {
  RemarkCode?: string | null;
};

export type TradelineGrantedTradeInput = {
  AccountType?: string | null;
  CreditType?: string | null;
  PaymentFrequency?: string | null;
  TermType?: string | null;
  WorstPayStatus?: string | null;
  PayStatusHistory?: TradelineGrantedTradePayStatusHistoryInput | null;
  CreditLimit?: string | null;
};

export type TradelineGrantedTradePayStatusHistoryInput = {
  MonthlyPayStatus?: Array<string | null> | null;
};

export type InquiryPartitionInput = {
  Inquiry?: InquiryPartitionInquiryInput | null;
};

export type InquiryPartitionInquiryInput = {
  IndustryCode?: string | null;
  Source?: SourceInput | null;
};

export type MessageInput = {
  code?: string | null;
  type?: string | null;
};

export type SummaryInput = {
  TradelineSummary?: TransunionSummaryInput | null;
  InquirySummary?: TransunionSummaryInput | null;
  PublicRecordSummary?: TransunionSummaryInput | null;
  Sources?: SummarySourcesInput | null;
  SafetyCheckPassed?: string | null;
};

export type TransunionSummaryInput = {
  TransUnion?: string | null;
};

export type SummarySourcesInput = {
  Source?: SummarySourceInput | null;
};

export type SummarySourceInput = {
  Bureau?: string | null;
  InquiryDate?: string | null;
  OriginalData?: string | null;
};

export type TUEnrollVantageScoreInput = {
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: MergeReportInput | null;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
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

export type Transunion = {
  __typename: "Transunion";
  authenticated?: boolean | null;
  indicativeEnrichmentSuccess?: boolean | null;
  getAuthenticationQuestionsSuccess?: boolean | null;
  serviceBundleFulfillmentKey?: string | null;
  currentRawQuestions?: string | null;
  currentRawAuthDetails?: string | null;
  enrollmentKey?: string | null;
  enrollReport?: TUEnrollResponse;
  enrollMergeReport?: TUEnrollMergeReport;
  enrollVantageScore?: TUEnrollVantageScore;
};

export type TUEnrollResponse = {
  __typename: "TUEnrollResponse";
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: string | null;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
};

export type TUEnrollMergeReport = {
  __typename: "TUEnrollMergeReport";
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: MergeReport;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
};

export type MergeReport = {
  __typename: "MergeReport";
  TrueLinkCreditReportType?: TrueLinkCreditReportType;
};

export type TrueLinkCreditReportType = {
  __typename: "TrueLinkCreditReportType";
  SB168Frozen?: string | null;
  Borrower?: Borrower;
  TradeLinePartition?: Array<TradeLinePartition | null> | null;
  InquiryPartition?: InquiryPartition;
  Message?: Array<Message | null> | null;
  Summary?: Summary;
};

export type Borrower = {
  __typename: "Borrower";
  BorrowerAddress?: BorrowerAddress;
  Birth?: BorrowerBirth;
  CreditScore?: BorrowerCreditScore;
  SocialPartition?: BorrowerSocialPartition;
};

export type BorrowerAddress = {
  __typename: "BorrowerAddress";
  CreditAddress?: string | null;
  Dwelling?: string | null;
  Origin?: string | null;
  Ownership?: string | null;
  Source?: Source;
};

export type Source = {
  __typename: "Source";
  BorrowerKey?: string | null;
  Bureau?: string | null;
  InquiryDate?: string | null;
  Reference?: string | null;
};

export type BorrowerBirth = {
  __typename: "BorrowerBirth";
  BirthDate?: string | null;
  Source?: Source;
};

export type BorrowerCreditScore = {
  __typename: "BorrowerCreditScore";
  CreditScoreFactor?: Array<CreditScoreFactor | null> | null;
  CreditScoreMode?: string | null;
  NoScoreReason?: string | null;
  Source?: Source;
};

export type CreditScoreFactor = {
  __typename: "CreditScoreFactor";
  Factor?: string | null;
  FactorText?: Array<string | null> | null;
};

export type BorrowerSocialPartition = {
  __typename: "BorrowerSocialPartition";
  Social?: BorrowerSocialPartitionSocial;
};

export type BorrowerSocialPartitionSocial = {
  __typename: "BorrowerSocialPartitionSocial";
  SocialSecurityNumber?: string | null;
  Source?: Source;
};

export type TradeLinePartition = {
  __typename: "TradeLinePartition";
  Tradeline?: TradelinePartitionTradeline;
};

export type TradelinePartitionTradeline = {
  __typename: "TradelinePartitionTradeline";
  AccountCondition?: string | null;
  AccountDesignator?: string | null;
  DisputeFlag?: string | null;
  IndustryCode?: string | null;
  OpenClosed?: string | null;
  PayStatus?: string | null;
  VerificationIndicator?: string | null;
  Remark?: TradelineRemark;
  GrantedTrade?: TradelineGrantedTrade;
  Source?: Source;
};

export type TradelineRemark = {
  __typename: "TradelineRemark";
  RemarkCode?: string | null;
};

export type TradelineGrantedTrade = {
  __typename: "TradelineGrantedTrade";
  AccountType?: string | null;
  CreditType?: string | null;
  PaymentFrequency?: string | null;
  TermType?: string | null;
  WorstPayStatus?: string | null;
  PayStatusHistory?: TradelineGrantedTradePayStatusHistory;
  CreditLimit?: string | null;
};

export type TradelineGrantedTradePayStatusHistory = {
  __typename: "TradelineGrantedTradePayStatusHistory";
  MonthlyPayStatus?: Array<string | null> | null;
};

export type InquiryPartition = {
  __typename: "InquiryPartition";
  Inquiry?: InquiryPartitionInquiry;
};

export type InquiryPartitionInquiry = {
  __typename: "InquiryPartitionInquiry";
  IndustryCode?: string | null;
  Source?: Source;
};

export type Message = {
  __typename: "Message";
  code?: string | null;
  type?: string | null;
};

export type Summary = {
  __typename: "Summary";
  TradelineSummary?: TransunionSummary;
  InquirySummary?: TransunionSummary;
  PublicRecordSummary?: TransunionSummary;
  Sources?: SummarySources;
  SafetyCheckPassed?: string | null;
};

export type TransunionSummary = {
  __typename: "TransunionSummary";
  TransUnion?: string | null;
};

export type SummarySources = {
  __typename: "SummarySources";
  Source?: SummarySource;
};

export type SummarySource = {
  __typename: "SummarySource";
  Bureau?: string | null;
  InquiryDate?: string | null;
  OriginalData?: string | null;
};

export type TUEnrollVantageScore = {
  __typename: "TUEnrollVantageScore";
  bureau?: string | null;
  errorResponse?: string | null;
  serviceProduct?: string | null;
  serviceProductFullfillmentKey?: string | null;
  serviceProductObject?: MergeReport;
  serviceProductTypeId?: string | null;
  serviceProductValue?: string | null;
  status?: string | null;
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
        __typename: "TUEnrollResponse";
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
        __typename: "TUEnrollMergeReport";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: "TUEnrollVantageScore";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
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
        __typename: "TUEnrollResponse";
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
        __typename: "TUEnrollMergeReport";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: "TUEnrollVantageScore";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
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
        __typename: "TUEnrollResponse";
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
        __typename: "TUEnrollMergeReport";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: "TUEnrollVantageScore";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
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
        __typename: "TUEnrollResponse";
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
        __typename: "TUEnrollMergeReport";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: "TUEnrollVantageScore";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
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
          __typename: "TUEnrollResponse";
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
          __typename: "TUEnrollMergeReport";
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: {
            __typename: "MergeReport";
            TrueLinkCreditReportType?: {
              __typename: "TrueLinkCreditReportType";
              SB168Frozen?: string | null;
              Borrower?: {
                __typename: "Borrower";
                BorrowerAddress?: {
                  __typename: "BorrowerAddress";
                  CreditAddress?: string | null;
                  Dwelling?: string | null;
                  Origin?: string | null;
                  Ownership?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
                Birth?: {
                  __typename: "BorrowerBirth";
                  BirthDate?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
                CreditScore?: {
                  __typename: "BorrowerCreditScore";
                  CreditScoreFactor?: Array<{
                    __typename: "CreditScoreFactor";
                    Factor?: string | null;
                    FactorText?: Array<string | null> | null;
                  } | null> | null;
                  CreditScoreMode?: string | null;
                  NoScoreReason?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
                SocialPartition?: {
                  __typename: "BorrowerSocialPartition";
                  Social?: {
                    __typename: "BorrowerSocialPartitionSocial";
                    SocialSecurityNumber?: string | null;
                  } | null;
                } | null;
              } | null;
              TradeLinePartition?: Array<{
                __typename: "TradeLinePartition";
                Tradeline?: {
                  __typename: "TradelinePartitionTradeline";
                  AccountCondition?: string | null;
                  AccountDesignator?: string | null;
                  DisputeFlag?: string | null;
                  IndustryCode?: string | null;
                  OpenClosed?: string | null;
                  PayStatus?: string | null;
                  VerificationIndicator?: string | null;
                  Remark?: {
                    __typename: "TradelineRemark";
                    RemarkCode?: string | null;
                  } | null;
                  GrantedTrade?: {
                    __typename: "TradelineGrantedTrade";
                    AccountType?: string | null;
                    CreditType?: string | null;
                    PaymentFrequency?: string | null;
                    TermType?: string | null;
                    WorstPayStatus?: string | null;
                    CreditLimit?: string | null;
                  } | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null> | null;
              InquiryPartition?: {
                __typename: "InquiryPartition";
                Inquiry?: {
                  __typename: "InquiryPartitionInquiry";
                  IndustryCode?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
              Message?: Array<{
                __typename: "Message";
                code?: string | null;
                type?: string | null;
              } | null> | null;
              Summary?: {
                __typename: "Summary";
                TradelineSummary?: {
                  __typename: "TransunionSummary";
                  TransUnion?: string | null;
                } | null;
                InquirySummary?: {
                  __typename: "TransunionSummary";
                  TransUnion?: string | null;
                } | null;
                PublicRecordSummary?: {
                  __typename: "TransunionSummary";
                  TransUnion?: string | null;
                } | null;
                Sources?: {
                  __typename: "SummarySources";
                  Source?: {
                    __typename: "SummarySource";
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    OriginalData?: string | null;
                  } | null;
                } | null;
                SafetyCheckPassed?: string | null;
              } | null;
            } | null;
          } | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
        enrollVantageScore?: {
          __typename: "TUEnrollVantageScore";
          bureau?: string | null;
          errorResponse?: string | null;
          serviceProduct?: string | null;
          serviceProductFullfillmentKey?: string | null;
          serviceProductObject?: {
            __typename: "MergeReport";
            TrueLinkCreditReportType?: {
              __typename: "TrueLinkCreditReportType";
              SB168Frozen?: string | null;
              Borrower?: {
                __typename: "Borrower";
                BorrowerAddress?: {
                  __typename: "BorrowerAddress";
                  CreditAddress?: string | null;
                  Dwelling?: string | null;
                  Origin?: string | null;
                  Ownership?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
                Birth?: {
                  __typename: "BorrowerBirth";
                  BirthDate?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
                CreditScore?: {
                  __typename: "BorrowerCreditScore";
                  CreditScoreFactor?: Array<{
                    __typename: "CreditScoreFactor";
                    Factor?: string | null;
                    FactorText?: Array<string | null> | null;
                  } | null> | null;
                  CreditScoreMode?: string | null;
                  NoScoreReason?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
                SocialPartition?: {
                  __typename: "BorrowerSocialPartition";
                  Social?: {
                    __typename: "BorrowerSocialPartitionSocial";
                    SocialSecurityNumber?: string | null;
                  } | null;
                } | null;
              } | null;
              TradeLinePartition?: Array<{
                __typename: "TradeLinePartition";
                Tradeline?: {
                  __typename: "TradelinePartitionTradeline";
                  AccountCondition?: string | null;
                  AccountDesignator?: string | null;
                  DisputeFlag?: string | null;
                  IndustryCode?: string | null;
                  OpenClosed?: string | null;
                  PayStatus?: string | null;
                  VerificationIndicator?: string | null;
                  Remark?: {
                    __typename: "TradelineRemark";
                    RemarkCode?: string | null;
                  } | null;
                  GrantedTrade?: {
                    __typename: "TradelineGrantedTrade";
                    AccountType?: string | null;
                    CreditType?: string | null;
                    PaymentFrequency?: string | null;
                    TermType?: string | null;
                    WorstPayStatus?: string | null;
                    CreditLimit?: string | null;
                  } | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null> | null;
              InquiryPartition?: {
                __typename: "InquiryPartition";
                Inquiry?: {
                  __typename: "InquiryPartitionInquiry";
                  IndustryCode?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
              Message?: Array<{
                __typename: "Message";
                code?: string | null;
                type?: string | null;
              } | null> | null;
              Summary?: {
                __typename: "Summary";
                TradelineSummary?: {
                  __typename: "TransunionSummary";
                  TransUnion?: string | null;
                } | null;
                InquirySummary?: {
                  __typename: "TransunionSummary";
                  TransUnion?: string | null;
                } | null;
                PublicRecordSummary?: {
                  __typename: "TransunionSummary";
                  TransUnion?: string | null;
                } | null;
                Sources?: {
                  __typename: "SummarySources";
                  Source?: {
                    __typename: "SummarySource";
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    OriginalData?: string | null;
                  } | null;
                } | null;
                SafetyCheckPassed?: string | null;
              } | null;
            } | null;
          } | null;
          serviceProductTypeId?: string | null;
          serviceProductValue?: string | null;
          status?: string | null;
        } | null;
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
        __typename: "TUEnrollResponse";
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
        __typename: "TUEnrollMergeReport";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: "TUEnrollVantageScore";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
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
        __typename: "TUEnrollResponse";
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
        __typename: "TUEnrollMergeReport";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: "TUEnrollVantageScore";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
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
        __typename: "TUEnrollResponse";
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
        __typename: "TUEnrollMergeReport";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
      enrollVantageScore?: {
        __typename: "TUEnrollVantageScore";
        bureau?: string | null;
        errorResponse?: string | null;
        serviceProduct?: string | null;
        serviceProductFullfillmentKey?: string | null;
        serviceProductObject?: {
          __typename: "MergeReport";
          TrueLinkCreditReportType?: {
            __typename: "TrueLinkCreditReportType";
            SB168Frozen?: string | null;
            Borrower?: {
              __typename: "Borrower";
              BorrowerAddress?: {
                __typename: "BorrowerAddress";
                CreditAddress?: string | null;
                Dwelling?: string | null;
                Origin?: string | null;
                Ownership?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              Birth?: {
                __typename: "BorrowerBirth";
                BirthDate?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              CreditScore?: {
                __typename: "BorrowerCreditScore";
                CreditScoreFactor?: Array<{
                  __typename: "CreditScoreFactor";
                  Factor?: string | null;
                  FactorText?: Array<string | null> | null;
                } | null> | null;
                CreditScoreMode?: string | null;
                NoScoreReason?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
              SocialPartition?: {
                __typename: "BorrowerSocialPartition";
                Social?: {
                  __typename: "BorrowerSocialPartitionSocial";
                  SocialSecurityNumber?: string | null;
                  Source?: {
                    __typename: "Source";
                    BorrowerKey?: string | null;
                    Bureau?: string | null;
                    InquiryDate?: string | null;
                    Reference?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
            TradeLinePartition?: Array<{
              __typename: "TradeLinePartition";
              Tradeline?: {
                __typename: "TradelinePartitionTradeline";
                AccountCondition?: string | null;
                AccountDesignator?: string | null;
                DisputeFlag?: string | null;
                IndustryCode?: string | null;
                OpenClosed?: string | null;
                PayStatus?: string | null;
                VerificationIndicator?: string | null;
                Remark?: {
                  __typename: "TradelineRemark";
                  RemarkCode?: string | null;
                } | null;
                GrantedTrade?: {
                  __typename: "TradelineGrantedTrade";
                  AccountType?: string | null;
                  CreditType?: string | null;
                  PaymentFrequency?: string | null;
                  TermType?: string | null;
                  WorstPayStatus?: string | null;
                  PayStatusHistory?: {
                    __typename: "TradelineGrantedTradePayStatusHistory";
                    MonthlyPayStatus?: Array<string | null> | null;
                  } | null;
                  CreditLimit?: string | null;
                } | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null> | null;
            InquiryPartition?: {
              __typename: "InquiryPartition";
              Inquiry?: {
                __typename: "InquiryPartitionInquiry";
                IndustryCode?: string | null;
                Source?: {
                  __typename: "Source";
                  BorrowerKey?: string | null;
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  Reference?: string | null;
                } | null;
              } | null;
            } | null;
            Message?: Array<{
              __typename: "Message";
              code?: string | null;
              type?: string | null;
            } | null> | null;
            Summary?: {
              __typename: "Summary";
              TradelineSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              InquirySummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              PublicRecordSummary?: {
                __typename: "TransunionSummary";
                TransUnion?: string | null;
              } | null;
              Sources?: {
                __typename: "SummarySources";
                Source?: {
                  __typename: "SummarySource";
                  Bureau?: string | null;
                  InquiryDate?: string | null;
                  OriginalData?: string | null;
                } | null;
              } | null;
              SafetyCheckPassed?: string | null;
            } | null;
          } | null;
        } | null;
        serviceProductTypeId?: string | null;
        serviceProductValue?: string | null;
        status?: string | null;
      } | null;
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
  owner?: string | null;
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
                serviceProductTypeId
                serviceProductValue
                status
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
                serviceProductTypeId
                serviceProductValue
                status
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
                serviceProductTypeId
                serviceProductValue
                status
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
                serviceProductTypeId
                serviceProductValue
                status
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
                  serviceProductObject {
                    __typename
                    TrueLinkCreditReportType {
                      __typename
                      SB168Frozen
                      Borrower {
                        __typename
                        BorrowerAddress {
                          __typename
                          CreditAddress
                          Dwelling
                          Origin
                          Ownership
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                        Birth {
                          __typename
                          BirthDate
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                        CreditScore {
                          __typename
                          CreditScoreFactor {
                            __typename
                            Factor
                            FactorText
                          }
                          CreditScoreMode
                          NoScoreReason
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                        SocialPartition {
                          __typename
                          Social {
                            __typename
                            SocialSecurityNumber
                          }
                        }
                      }
                      TradeLinePartition {
                        __typename
                        Tradeline {
                          __typename
                          AccountCondition
                          AccountDesignator
                          DisputeFlag
                          IndustryCode
                          OpenClosed
                          PayStatus
                          VerificationIndicator
                          Remark {
                            __typename
                            RemarkCode
                          }
                          GrantedTrade {
                            __typename
                            AccountType
                            CreditType
                            PaymentFrequency
                            TermType
                            WorstPayStatus
                            CreditLimit
                          }
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                      InquiryPartition {
                        __typename
                        Inquiry {
                          __typename
                          IndustryCode
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                      Message {
                        __typename
                        code
                        type
                      }
                      Summary {
                        __typename
                        TradelineSummary {
                          __typename
                          TransUnion
                        }
                        InquirySummary {
                          __typename
                          TransUnion
                        }
                        PublicRecordSummary {
                          __typename
                          TransUnion
                        }
                        Sources {
                          __typename
                          Source {
                            __typename
                            Bureau
                            InquiryDate
                            OriginalData
                          }
                        }
                        SafetyCheckPassed
                      }
                    }
                  }
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
                  serviceProductObject {
                    __typename
                    TrueLinkCreditReportType {
                      __typename
                      SB168Frozen
                      Borrower {
                        __typename
                        BorrowerAddress {
                          __typename
                          CreditAddress
                          Dwelling
                          Origin
                          Ownership
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                        Birth {
                          __typename
                          BirthDate
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                        CreditScore {
                          __typename
                          CreditScoreFactor {
                            __typename
                            Factor
                            FactorText
                          }
                          CreditScoreMode
                          NoScoreReason
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                        SocialPartition {
                          __typename
                          Social {
                            __typename
                            SocialSecurityNumber
                          }
                        }
                      }
                      TradeLinePartition {
                        __typename
                        Tradeline {
                          __typename
                          AccountCondition
                          AccountDesignator
                          DisputeFlag
                          IndustryCode
                          OpenClosed
                          PayStatus
                          VerificationIndicator
                          Remark {
                            __typename
                            RemarkCode
                          }
                          GrantedTrade {
                            __typename
                            AccountType
                            CreditType
                            PaymentFrequency
                            TermType
                            WorstPayStatus
                            CreditLimit
                          }
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                      InquiryPartition {
                        __typename
                        Inquiry {
                          __typename
                          IndustryCode
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                      Message {
                        __typename
                        code
                        type
                      }
                      Summary {
                        __typename
                        TradelineSummary {
                          __typename
                          TransUnion
                        }
                        InquirySummary {
                          __typename
                          TransUnion
                        }
                        PublicRecordSummary {
                          __typename
                          TransUnion
                        }
                        Sources {
                          __typename
                          Source {
                            __typename
                            Bureau
                            InquiryDate
                            OriginalData
                          }
                        }
                        SafetyCheckPassed
                      }
                    }
                  }
                  serviceProductTypeId
                  serviceProductValue
                  status
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
                serviceProductTypeId
                serviceProductValue
                status
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
                serviceProductTypeId
                serviceProductValue
                status
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
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
                serviceProductObject {
                  __typename
                  TrueLinkCreditReportType {
                    __typename
                    SB168Frozen
                    Borrower {
                      __typename
                      BorrowerAddress {
                        __typename
                        CreditAddress
                        Dwelling
                        Origin
                        Ownership
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      Birth {
                        __typename
                        BirthDate
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      CreditScore {
                        __typename
                        CreditScoreFactor {
                          __typename
                          Factor
                          FactorText
                        }
                        CreditScoreMode
                        NoScoreReason
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                      SocialPartition {
                        __typename
                        Social {
                          __typename
                          SocialSecurityNumber
                          Source {
                            __typename
                            BorrowerKey
                            Bureau
                            InquiryDate
                            Reference
                          }
                        }
                      }
                    }
                    TradeLinePartition {
                      __typename
                      Tradeline {
                        __typename
                        AccountCondition
                        AccountDesignator
                        DisputeFlag
                        IndustryCode
                        OpenClosed
                        PayStatus
                        VerificationIndicator
                        Remark {
                          __typename
                          RemarkCode
                        }
                        GrantedTrade {
                          __typename
                          AccountType
                          CreditType
                          PaymentFrequency
                          TermType
                          WorstPayStatus
                          PayStatusHistory {
                            __typename
                            MonthlyPayStatus
                          }
                          CreditLimit
                        }
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    InquiryPartition {
                      __typename
                      Inquiry {
                        __typename
                        IndustryCode
                        Source {
                          __typename
                          BorrowerKey
                          Bureau
                          InquiryDate
                          Reference
                        }
                      }
                    }
                    Message {
                      __typename
                      code
                      type
                    }
                    Summary {
                      __typename
                      TradelineSummary {
                        __typename
                        TransUnion
                      }
                      InquirySummary {
                        __typename
                        TransUnion
                      }
                      PublicRecordSummary {
                        __typename
                        TransUnion
                      }
                      Sources {
                        __typename
                        Source {
                          __typename
                          Bureau
                          InquiryDate
                          OriginalData
                        }
                      }
                      SafetyCheckPassed
                    }
                  }
                }
                serviceProductTypeId
                serviceProductValue
                status
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
