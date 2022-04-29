import * as AppDataActions from '@store/app-data/app-data.actions';
import * as UserActions from '@store/user/user.actions';
import * as AgenciesActions from '@store/agencies/agencies.actions';
import * as OnboardingActions from '@store/onboarding/onboarding.actions';
import { AppDataStateModel } from '@store/app-data';

export const MOCK_APPDATA_MODEL = {} as any;
export const MOCK_APPDATA_EDIT_ACTION = new AppDataActions.Edit(MOCK_APPDATA_MODEL);

export const MOCK_USER_ATTS_MODEL = {} as any;
export const MOCK_USER_UPDATEATTR_ACTION = new UserActions.UpdateAttributes(MOCK_USER_ATTS_MODEL);

export const MOCK_AGENCIES_MODEL = {} as any;
export const MOCK_AGENCIES_EDIT_ACTION = new AgenciesActions.Edit(MOCK_AGENCIES_MODEL);

export const MOCK_TUPARTIAL_MODEL = {
  indicativeEnrichmentSuccess: true,
  indicativeEnrichmentStatus: {},
  getAuthenticationQuestionsSuccess: true,
  getAuthenticationQuestionsStatus: {},
  serviceBundleFulfillmentKey: 'abc',
  currentRawQuestions: 'questions',
  currentRawAuthDetails: 'auth-details',
} as any;
const {
  indicativeEnrichmentSuccess,
  indicativeEnrichmentStatus,
  getAuthenticationQuestionsSuccess,
  getAuthenticationQuestionsStatus,
  serviceBundleFulfillmentKey,
  currentRawQuestions,
  currentRawAuthDetails,
} = MOCK_TUPARTIAL_MODEL;

export const MOCK_AGENCIES_EDITTRANS_ACTION = new AgenciesActions.EditTransunion(MOCK_TUPARTIAL_MODEL);

export const MOCK_AGENCIES_INDENRICH_ACTION = new AgenciesActions.EditTransunion({
  indicativeEnrichmentSuccess,
  indicativeEnrichmentStatus,
});
export const MOCK_AGENCIES_AUTHQUEST_ACTION = new AgenciesActions.EditTransunion({
  getAuthenticationQuestionsSuccess,
  getAuthenticationQuestionsStatus,
  serviceBundleFulfillmentKey,
});
export const MOCK_AGENCIES_TRANSQUEST_ACTION = new AgenciesActions.EditTransunion({ currentRawQuestions });
export const MOCK_AGENCIES_TRANSAUTH_ACTION = new AgenciesActions.EditTransunion({ currentRawAuthDetails });

export const MOCK_AGENCIES_ACK_MODEL = {
  acknowledgedDisputeTerms: true,
  acknowledgedDisputeTermsOn: '1970-01-01',
} as any;
export const MOCK_AGENCIES_ACK_ACTION = new AgenciesActions.EditAcknowledgeDisputeTerms(MOCK_AGENCIES_ACK_MODEL);

export const MOCK_AGENCIES_INCRAUTH_ACTION = new AgenciesActions.IncrementTransunionAuthAttempts();

export const MOCK_AGENCIES_INITPIN_ACTION = new AgenciesActions.InitiateTransunionPinDetails();

export const MOCK_AGENCIES_INCRPIN_ACTION = new AgenciesActions.IncrementTransunionPinRequest();

export const MOCK_AGENCIES_INCRPINATTMPT_ACTION = new AgenciesActions.IncrementTransunionPinAttempts();

export const MOCK_AGENCIES_INITKBA_ACTION = new AgenciesActions.InitiateTransunionKBADetails();

export const MOCK_ONBOARDING_LASTCOMP_MODEL = 1;
export const MOCK_ONBOARDING_LASTCOMP_ACTION = new OnboardingActions.UpdateLastComplete(MOCK_ONBOARDING_LASTCOMP_MODEL);

export const MOCK_ONBOARDING_LASTACT_MODEL = 1;
export const MOCK_ONBOARDING_LASTACT_ACTION = new OnboardingActions.UpdateLastActive(MOCK_ONBOARDING_LASTACT_MODEL);

export const MOCK_AGENCIES_AUTH_MODEL = { authenticated: true, authenticatedOn: '1970-01-01' } as any;
export const MOCK_AGENCIES_AUTH_ACTION = new AgenciesActions.UpdateAuthentication(MOCK_AGENCIES_AUTH_MODEL);

export const MOCK_ONBOARDING_ABAND_ACTION = new OnboardingActions.AbandonOnboarding();

export const MOCK_ONBOARDING_RESET_ACTION = new OnboardingActions.ResetOnboarding();
