import { IBaseException, IBaseExceptionCategory } from './interfaces';

export const DEFAULT_EXCEPTION = {
  code: '331',
};

/**
 * Collection containing all the default visual exception's categories.
 */
export const DEFAULT_VISUAL_EXCEPTION_CATEGORIES: IBaseExceptionCategory[] = [
  {
    type: "open_exists",
    message: "You have an open dispute request in progress.",
    description: "You may initiate additional disputes only when the in-process dispute investigation is complete. We will let you know as soon as a decision is made.",
    actionText: "View my ongoing disputes",
    route: "/dashboard/disputes",
  },
  {
    type: "try_later_s",
    message: "Online Dispute Functionality Temporarily Unavailable.",
    subheader:
      "We’re sorry! An error occurred when we tried to perform the action you requested.",
      description: "We expect things to be back to normal soon, please wait and try again later.",
    actionText: "Try again",
    route: "/dashboard/report",
  },
  {
    type: "try_later_tu",
    message: "Cannot Access Credit Report.",
    subheader:
      "We’re sorry! An error occurred when we tried to perform the action you requested.",
      description: "We’re working on the problem and expect things to be back to normal soon. Please wait and try again later.",
    actionText: "Try again",
    route: "/dashboard/report",
  },
  {
    type: "file_maintenance",
    message: "Online Dispute Not Available.",
    subheader:
      "We're sorry, your TransUnion credit report is currently not eligible for the online dispute process due to file maintenance needed.",
      description: "For further assistance please contact the TransUnion Consumer Relations team at 800-916-8800, open Monday through Friday, 8:00 a.m. to 11:00 p.m. Eastern Standard Time, and they will attempt to resolve the issue.",
    actionText: "Go Home",
    route: "/dashboard/init",
  },
  {
    type: "ineligible",
    message: "Not Eligible for Online Disputes.",
    subheader:
      "We're sorry, online dispute functionality is not available for this TransUnion credit report.",
      description: "For further assistance please contact the TransUnion Consumer Relations team at 800-916-8800, open Monday through Friday, 8:00 a.m. to 11:00 p.m. Eastern Standard Time, and  they will attempt to resolve the issue.",
    actionText: "Go Home",
    route: "/dashboard/init",
  },
];

/**
 * Collection containing all the default visual exceptions.
 */
export const DEFAULT_VISUAL_EXCEPTIONS: IBaseException[] = [
  {
    code: '321',
    metaErrorDisplay: 'FIN_HAS_OPEN_DISPUTE',
    description: 'Open dispute already exists on file',
    categoryType: 'open_exists',
  },
  {
    code: '197',
    metaErrorDisplay: 'UNKNOWN_ERROR_CODE',
    description: 'UNKNOWN_ERROR_CODE',
    categoryType: 'try_later_tu',
  },
  {
    code: '219',
    metaErrorDisplay: 'MULTIPLE_FILES_FOUND',
    description: 'Ineligible for online disputes, file maintenance needed',
    categoryType: 'file_maintenance',
  },
  {
    code: '310',
    metaErrorDisplay: 'MULTIPLE_FINS_FOUND',
    description: 'Ineligible for online disputes, file maintenance needed',
    categoryType: 'file_maintenance',
  },
  {
    code: '300',
    metaErrorDisplay: 'MULTIPLE_FINS_FOUND',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '362',
    metaErrorDisplay: 'FIN_IS_DEAD',
    description: 'Ineligible for online disputes, file maintenance needed',
    categoryType: 'file_maintenance',
  },
  {
    code: '323',
    metaErrorDisplay: 'PRIORITY_OR_FRAUD_FIN',
    description: 'Ineligible for online disputes',
    categoryType: 'ineligible',
  },
  {
    code: '357',
    metaErrorDisplay: 'FIN_RELATED_TO_LAW',
    description: 'Ineligible for online disputes',
    categoryType: 'ineligible',
  },
  {
    code: '358',
    metaErrorDisplay: 'FIN_IS_LOCKED',
    description: 'Ineligible for online disputes',
    categoryType: 'ineligible',
  },
  {
    code: '330',
    metaErrorDisplay: 'INVALID_COMMAND',
    description: 'Invalid command action or FIN number ',
    categoryType: 'try_later_s',
  },
  {
    code: '359',
    metaErrorDisplay: 'FIN_IS_MID',
    description: 'Ineligible for online disputes',
    categoryType: 'ineligible',
  },
  {
    code: '361',
    metaErrorDisplay: 'FIN_IS_RELATED_TO_TPL',
    description: 'Ineligible for online disputes',
    categoryType: 'ineligible',
  },
  {
    code: '330',
    metaErrorDisplay: 'UNKNOWN_JAVA_EXCEPTION',
    description: 'Unknown java exception',
    categoryType: 'try_later_s',
  },
  {
    code: '333',
    metaErrorDisplay: 'UNKNOWN_CICS_EXCEPTION',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '334',
    metaErrorDisplay: 'ADDRESS_PARSING_ERROR',
    description: 'Address Parsing Error',
    categoryType: 'try_later_s',
  },
  {
    code: '340',
    metaErrorDisplay: 'INVALID_FIN',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '352',
    metaErrorDisplay: 'MISSING_LINE_ITEM',
    description: 'Line item is Missing',
    categoryType: 'try_later_tu',
  },
  {
    code: '353',
    metaErrorDisplay: 'DUPLICATE_LINE_ITEM',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '354',
    metaErrorDisplay: 'REQUIRED_DOCUMENT_IS_NULL',
    description: 'Required document is null.',
    categoryType: 'try_later_s',
  },
  {
    code: '355',
    metaErrorDisplay: 'INVALID_REQUEST_BEAN',
    description: 'Invalid request bean is passed.',
    categoryType: 'try_later_s',
  },
  {
    code: '356',
    metaErrorDisplay: 'INVALID_REQUEST_PARAMETER',
    description: 'Invalid request parameter is passed.',
    categoryType: 'try_later_s',
  },
  {
    code: '11',
    metaErrorDisplay: 'Failure',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '221',
    metaErrorDisplay: 'TRUECREDIT_SSN_DOES_NOT_MATCH_C_3',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '320',
    metaErrorDisplay: 'FIN_IN_USE',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '360',
    metaErrorDisplay: 'FIN_IS_JOINT',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '331',
    metaErrorDisplay: 'UNKNOWN_APP_ERROR',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '332',
    metaErrorDisplay: 'UNKNOWN_APP_EXCEPTION',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '363',
    metaErrorDisplay: 'FIN_IS_ARCHIVED',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '364',
    metaErrorDisplay: 'ASSOCIATED_PARTY_ID_INVALID',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '365',
    metaErrorDisplay: 'INVALID_PARENT_ACTIVITY',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '367',
    metaErrorDisplay: 'FAILED_TO_CREATE_CRS_3_CC_XML',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '368',
    metaErrorDisplay: 'INVALID_ACTIVITY_TYPE',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '369',
    metaErrorDisplay: 'NO_ACTIVITY_FOUND',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '370',
    metaErrorDisplay: 'CANNOT_RETRIEVE_CREDIT_FILE_BY_PARTY_ID',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '371',
    metaErrorDisplay: 'FIN_NOT_FOUND',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '373',
    metaErrorDisplay: 'ERROR_WRITING_TO_JMS_QUEUE',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '389',
    metaErrorDisplay: 'REPEAT_DISPUTE',
    description: 'Ineligible for online disputes, file maintenance needed',
    categoryType: 'file_maintenance',
  },
  {
    code: '391',
    metaErrorDisplay: 'INVALID_COMMAND',
    description: 'Exceeds max characters or has special characters',
    categoryType: 'try_later_s',
  },
  {
    code: '392',
    metaErrorDisplay: 'MISSING_COMMENT',
    description: 'Dispute requires a comment',
    categoryType: 'try_later_s',
  },
  {
    code: '393',
    metaErrorDisplay: 'INVALID_DISPUTE',
    description: 'If dispute reason is "Other", a second dispute reason is not allowed',
    categoryType: 'try_later_s',
  },
  {
    code: '440',
    metaErrorDisplay: 'NO_CREDIT_FILE_FOUND',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
  {
    code: '457',
    metaErrorDisplay: 'CREDIT_FILE_IS_SUPRESSED',
    description: 'Ineligible for online disputes',
    categoryType: 'ineligible',
  },
  {
    code: '458',
    metaErrorDisplay: 'FRAUD_ADDRESS_IN_CREDIT_FILE',
    description: 'Ineligible for online disputes',
    categoryType: 'ineligible',
  },
  {
    code: '459',
    metaErrorDisplay: 'FRAUD_EMPLOYMENT_IN_CREDIT_FILE',
    description: 'Ineligible for online disputes',
    categoryType: 'ineligible',
  },
  {
    code: '460',
    metaErrorDisplay: 'ERROR_FETCHING_DATA_FROM_TURF',
    description: 'System error, please try again. ',
    categoryType: 'try_later_tu',
  },
];
