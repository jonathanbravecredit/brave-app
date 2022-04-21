import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import {
  IGetAuthenticationQuestionsResult,
  ITransunionKBAQuestion,
  ITransunionKBAQuestions,
  ITUServiceResponse,
  IVerifyAuthenticationAnswer,
  IVerifyAuthenticationQuestionsResult,
  TransunionInput,
  TransunionUtil,
  TUStatusRefInput,
  UpdateAppDataInput,
  UserAttributesInput,
} from "@bravecredit/brave-sdk";
import { Store } from "@ngxs/store";
import { IIndicativeEnrichmentResult } from "@shared/interfaces";
import { AgenciesStateModel } from "@store/agencies";
import { AnalyticsService } from "../analytics/analytics/analytics.service";
import { AuthService } from "../auth/auth.service";
import { StateService } from "../state/state.service";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import { BraveUtil as bc } from "@shared/utils/brave/brave";
import { KycService } from "./kyc.service";
import { TransunionService } from "../transunion/transunion.service";
import { of } from "rxjs";
import { AppDataStateModel } from "@store/app-data";
import { ICreditReport } from "@shared/models/CreditReports.model";
import { AppStatus, AppStatusReason } from "@shared/utils/brave/constants";

describe("KycService", () => {
  let service: KycService;
  let storeMock: any;
  let authMock: any;
  let statesvcMock: any;
  let transunionMock: any;
  let analyticsMock: any;
  let routerMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj("Store", ["dispatch", "snapshot"]);
    authMock = jasmine.createSpyObj("AuthService", [
      "getUserSub",
      "getUserEmail",
    ]);
    statesvcMock = jasmine.createSpyObj(
      "StateService",
      [
        "updateLastActive",
        "updateLastCompleteAsync",
        "updateAuthenticatedOnAsync",
        "updateAbandonedStatusAsync",
        "updateUserAttributesAsync",
        "updateAgenciesAsync",
        "updateTransunion",
        "updateIndicativeEnrichment",
        "updateGetAuthenticationQuestions",
        "incrementAuthAttemptsAsync",
        "initiateKBADetailsAsync",
        "updateTransunionQuestionsAsync",
        "initiateTransunionPinDetailsAsync",
        "incrementTransunionPinRequestAsync",
        "incrementTransunionPinAttemptsAsync",
        "updateStateDBSyncAsync",
      ],
      {
        state$: of(),
      }
    );
    Object.defineProperty(statesvcMock, "state$", { writable: true });
    transunionMock = jasmine.createSpyObj("TransunionService", [
      "sendIndicativeEnrichment",
      "sendGetAuthenticationQuestions",
      "sendVerifyAuthenticationQuestions",
      "sendEnrollRequest",
      "sendCompleteOnboarding",
    ]);
    analyticsMock = jasmine.createSpyObj("AnalyticsService", [
      "fireErrorEvent",
    ]);
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: AuthService, useValue: authMock },
        { provide: StateService, useValue: statesvcMock },
        { provide: TransunionService, useValue: transunionMock },
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: Router, useValue: routerMock },
        KycService,
      ],
    });
    service = TestBed.inject(KycService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should run statesvc.updateLastActive on activateStep", () => {
    service.activateStep(1);
    expect(statesvcMock.updateLastActive).toHaveBeenCalled();
  });

  it("should run statesvc.updateLastActive on inactivateStep", () => {
    service.inactivateStep(1);
    expect(statesvcMock.updateLastActive).toHaveBeenCalled();
  });

  it("should run statesvc.updateLastCompleteAsync on completeStep", () => {
    service.completeStep(1);
    expect(statesvcMock.updateLastCompleteAsync).toHaveBeenCalled();
  });

  it("should run statesvc.updateLastCompleteAsync on incompleteStep", () => {
    service.incompleteStep(1);
    expect(statesvcMock.updateLastCompleteAsync).toHaveBeenCalled();
  });

  it("should run store.snapshot on updateStep", () => {
    service.updateStep(1, 1, true);
    expect(storeMock.snapshot).toHaveBeenCalled();
  });

  it("should run statesvc.updateAuthenticatedOnAsync on updateAuthenticatedOn", () => {
    service.updateAuthenticatedOn(true, "");
    expect(statesvcMock.updateAuthenticatedOnAsync).toHaveBeenCalled();
  });

  it("should run statesvc.updateAbandonedStatusAsync on abandonOnboarding", () => {
    service.abandonOnboarding();
    expect(statesvcMock.updateAbandonedStatusAsync).toHaveBeenCalled();
  });

  it("should run statesvc.updateUserAttributesAsync on updateUserAttributesAsync", () => {
    service.updateUserAttributesAsync({} as UserAttributesInput);
    expect(statesvcMock.updateUserAttributesAsync).toHaveBeenCalled();
  });

  it("should run auth.getUserEmail on getUserEmail", () => {
    authMock.getUserEmail.and.returnValue(Promise.resolve("test"));
    service.getUserEmail();
    expect(authMock.getUserEmail).toHaveBeenCalled();
  });

  it("should run auth.getUserSub on getUserSub", () => {
    service.getUserSub();
    expect(authMock.getUserSub).toHaveBeenCalled();
  });

  it("should run statesvc.updateAgenciesAsync on updateAgenciesAsync", () => {
    service.updateAgenciesAsync({} as AgenciesStateModel);
    expect(statesvcMock.updateAgenciesAsync).toHaveBeenCalled();
  });

  it("should run statesvc.updateTransunion on updateTransunion", () => {
    service.updateTransunion({} as Partial<TransunionInput>);
    expect(statesvcMock.updateTransunion).toHaveBeenCalled();
  });

  it("should run tu.generators.createOnboardingStatus on processIndicativeEnrichmentResponse if success", () => {
    let spy = spyOn(tu.generators, "createOnboardingStatus");
    service.processIndicativeEnrichmentResponse(
      { ResponseType: "success" } as IIndicativeEnrichmentResult,
      {} as ITUServiceResponse<IIndicativeEnrichmentResult>
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should run updateIndicativeEnrichment on processIndicativeEnrichmentResponse if success", () => {
    let spy = spyOn(service, "updateIndicativeEnrichment");
    service.processIndicativeEnrichmentResponse(
      { ResponseType: "success" } as IIndicativeEnrichmentResult,
      {} as ITUServiceResponse<IIndicativeEnrichmentResult>
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should run tu.generators.createOnboardingStatus on processIndicativeEnrichmentResponse if failure", () => {
    let spy = spyOn(tu.generators, "createOnboardingStatus");
    service.processIndicativeEnrichmentResponse(
      { ResponseType: "failure" } as IIndicativeEnrichmentResult,
      {} as ITUServiceResponse<IIndicativeEnrichmentResult>
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should run updateIndicativeEnrichment on processIndicativeEnrichmentResponse if failure", () => {
    let spy = spyOn(service, "updateIndicativeEnrichment");
    service.processIndicativeEnrichmentResponse(
      { ResponseType: "failure" } as IIndicativeEnrichmentResult,
      {} as ITUServiceResponse<IIndicativeEnrichmentResult>
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should run statesvc.updateIndicativeEnrichment on updateIndicativeEnrichment", () => {
    service.updateIndicativeEnrichment({
      indicativeEnrichmentSuccess: true,
      indicativeEnrichmentStatus: {} as TUStatusRefInput,
    });
    expect(statesvcMock.updateIndicativeEnrichment).toHaveBeenCalled();
  });

  it("should run sendGetAuthenticationQuestions on getGetAuthenticationQuestionsResults", () => {
    spyOn(service, "sendGetAuthenticationQuestions");
    service.getGetAuthenticationQuestionsResults({
      user: { userAttributes: { ssn: { full: "123456789" } } },
    } as UpdateAppDataInput);
    expect(service.sendGetAuthenticationQuestions).toHaveBeenCalled();
  });

  it("should run sendGetAuthenticationQuestions on sendGetAuthenticationQuestions", () => {
    service.sendGetAuthenticationQuestions(
      {
        user: { userAttributes: { ssn: { full: "123456789" } } },
      } as UpdateAppDataInput,
      "123456789"
    );
    expect(transunionMock.sendGetAuthenticationQuestions).toHaveBeenCalled();
  });

  it("should run tu.generators.createOnboardingStatus on processGetAuthenticationQuestionsResponse if success", () => {
    statesvcMock.state$ = { value: { appData: {} as AppDataStateModel } };
    let spy = spyOn(tu.generators, "createOnboardingStatus");
    service.processGetAuthenticationQuestionsResponse({
      ResponseType: "success",
    } as IGetAuthenticationQuestionsResult);
    expect(spy).toHaveBeenCalled();
  });

  it("should run updateGetAuthenticationQuestions on processGetAuthenticationQuestionsResponse if success", () => {
    statesvcMock.state$ = { value: { appData: {} as AppDataStateModel } };
    let spy = spyOn(service, "updateGetAuthenticationQuestions");
    service.processGetAuthenticationQuestionsResponse({
      ResponseType: "success",
    } as IGetAuthenticationQuestionsResult);
    expect(spy).toHaveBeenCalled();
  });

  it("should run tu.generators.createOnboardingStatus on processGetAuthenticationQuestionsResponse if failure", () => {
    statesvcMock.state$ = { value: { appData: {} as AppDataStateModel } };
    let spy = spyOn(tu.generators, "createOnboardingStatus");
    service.processGetAuthenticationQuestionsResponse({
      ResponseType: "failure",
    } as IGetAuthenticationQuestionsResult);
    expect(spy).toHaveBeenCalled();
  });

  it("should run updateGetAuthenticationQuestions on processGetAuthenticationQuestionsResponse if failure", () => {
    statesvcMock.state$ = { value: { appData: {} as AppDataStateModel } };
    let spy = spyOn(service, "updateGetAuthenticationQuestions");
    service.processGetAuthenticationQuestionsResponse({
      ResponseType: "failure",
    } as IGetAuthenticationQuestionsResult);
    expect(spy).toHaveBeenCalled();
  });

  it("should run handleGetAuthenticationBailout on handleGetAuthenticationFlow if !success or !data", () => {
    let spy = spyOn(service, "handleGetAuthenticationBailout");
    service.handleGetAuthenticationFlow(
      {} as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should run handleGetAuthenticationBailout on handleGetAuthenticationFlow", () => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    expect(spy).toHaveBeenCalled();
  });

  it("should run tu.parsers.onboarding.parseAuthQuestions on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy2).toHaveBeenCalled();
  }));

  it("should run handleGetAuthenticationBailout on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("");
    let spy3 = spyOn(service, "handleGetAuthenticationBailout");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy3).toHaveBeenCalled();
  }));

  it("should run updateCurrentRawQuestionsAsync on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "updateCurrentRawQuestionsAsync");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy3).toHaveBeenCalled();
  }));

  it("should run tu.parsers.onboarding.parseCurrentRawAuthXML on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(tu.parsers.onboarding, "parseCurrentRawAuthXML");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy3).toHaveBeenCalled();
  }));

  it("should run getOTPQuestion on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy3).toHaveBeenCalled();
  }));

  it("should run sendOTPResponse on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue({} as ITransunionKBAQuestion);
    let spy4 = spyOn(service, "sendOTPResponse");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy4).toHaveBeenCalled();
  }));

  it("should run handleGetAuthenticationBailout on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue({} as ITransunionKBAQuestion);
    let spy4 = spyOn(service, "sendOTPResponse");
    spy4.and.returnValue(
      Promise.resolve(
        {} as ITUServiceResponse<
          IVerifyAuthenticationQuestionsResult | undefined
        >
      )
    );
    let spy5 = spyOn(service, "handleGetAuthenticationBailout");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy5).toHaveBeenCalled();
  }));

  it("should run startPinClock on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue({} as ITransunionKBAQuestion);
    let spy4 = spyOn(service, "sendOTPResponse");
    spy4.and.returnValue(
      Promise.resolve({
        success: true,
        data: {},
      } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>)
    );
    let spy5 = spyOn(service, "startPinClock");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy5).toHaveBeenCalled();
  }));

  it("should run updateCurrentRawQuestionsAsync on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue({} as ITransunionKBAQuestion);
    let spy4 = spyOn(service, "sendOTPResponse");
    spy4.and.returnValue(
      Promise.resolve({
        success: true,
        data: {},
      } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>)
    );
    let spy5 = spyOn(service, "updateCurrentRawQuestionsAsync");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy5).toHaveBeenCalled();
  }));

  it("should run updateAgenciesAsync on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue({} as ITransunionKBAQuestion);
    let spy4 = spyOn(service, "sendOTPResponse");
    spy4.and.returnValue(
      Promise.resolve({
        success: true,
        data: {},
      } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>)
    );
    let spy5 = spyOn(service, "updateAgenciesAsync");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy5).toHaveBeenCalled();
  }));

  it("should run router.navigate on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue({} as ITransunionKBAQuestion);
    let spy4 = spyOn(service, "sendOTPResponse");
    spy4.and.returnValue(
      Promise.resolve({
        success: true,
        data: {},
      } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>)
    );
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it("should run startKbaClock on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue(undefined);
    let spy4 = spyOn(service, "startKbaClock");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy4).toHaveBeenCalled();
  }));

  it("should run updateAgenciesAsync on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue(undefined);
    let spy4 = spyOn(service, "updateAgenciesAsync");
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(spy4).toHaveBeenCalled();
  }));

  it("should run router.navigate on handleGetAuthenticationFlow", fakeAsync(() => {
    let spy = spyOn(service, "processGetAuthenticationQuestionsResponse");
    spy.and.returnValue(
      Promise.resolve({} as IGetAuthenticationQuestionsResult)
    );
    let spy2 = spyOn(tu.parsers.onboarding, "parseAuthQuestions");
    spy2.and.returnValue("test");
    let spy3 = spyOn(service, "getOTPQuestion");
    spy3.and.returnValue(undefined);
    service.handleGetAuthenticationFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>);
    tick();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it("should run tu.parsers.onboarding.parseVerificationInProgressQuestions on handleVerificationInProgressFlow", () => {
    let spy = spyOn(
      tu.parsers.onboarding,
      "parseVerificationInProgressQuestions"
    );
    service.handleVerificationInProgressFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>);
    expect(spy).toHaveBeenCalled();
  });

  it("should run handleGetAuthenticationBailout on handleVerificationInProgressFlow", () => {
    let spy = spyOn(
      tu.parsers.onboarding,
      "parseVerificationInProgressQuestions"
    );
    spy.and.returnValue("");
    let spy1 = spyOn(service, "handleGetAuthenticationBailout");
    service.handleVerificationInProgressFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>);
    expect(spy1).toHaveBeenCalled();
  });

  it("should run updateCurrentRawQuestionsAsync on handleVerificationInProgressFlow", () => {
    let spy = spyOn(
      tu.parsers.onboarding,
      "parseVerificationInProgressQuestions"
    );
    spy.and.returnValue("test");
    let spy1 = spyOn(service, "updateCurrentRawQuestionsAsync");
    service.handleVerificationInProgressFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>);
    expect(spy1).toHaveBeenCalled();
  });

  it("should run router.navigate on handleVerificationInProgressFlow", fakeAsync(() => {
    let spy = spyOn(
      tu.parsers.onboarding,
      "parseVerificationInProgressQuestions"
    );
    spy.and.returnValue("test");
    service.handleVerificationInProgressFlow({
      success: true,
      data: {},
    } as ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>);
    tick();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it("should run statesvc.updateGetAuthenticationQuestions on updateGetAuthenticationQuestions", () => {
    service.updateGetAuthenticationQuestions({
      getAuthenticationQuestionsSuccess: true,
      getAuthenticationQuestionsStatus: {} as TUStatusRefInput,
      serviceBundleFulfillmentKey: "test",
    });
    expect(statesvcMock.updateGetAuthenticationQuestions).toHaveBeenCalled();
  });

  it("should run store.snapshot on sendOTPResponse", () => {
    service.sendOTPResponse({} as ITransunionKBAQuestion);
    expect(storeMock.snapshot).toHaveBeenCalled();
  });

  it("should run getOTPSendTextAnswer on sendOTPResponse", () => {
    let spy = spyOn(service, "getOTPSendTextAnswer");
    storeMock.snapshot.and.returnValue({});
    service.sendOTPResponse({} as ITransunionKBAQuestion);
    expect(spy).toHaveBeenCalled();
  });

  it("should run sendVerifyAuthenticationQuestions on sendOTPResponse", fakeAsync(() => {
    let spy = spyOn(service, "sendVerifyAuthenticationQuestions");
    spy.and.returnValue(
      Promise.resolve(
        {} as ITUServiceResponse<
          IVerifyAuthenticationQuestionsResult | undefined
        >
      )
    );
    storeMock.snapshot.and.returnValue({});
    service.sendOTPResponse({} as ITransunionKBAQuestion);
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it("should run transunion.sendVerifyAuthenticationQuestions on sendVerifyAuthenticationQuestions", () => {
    service.sendVerifyAuthenticationQuestions(
      { id: "1" } as AppDataStateModel,
      [{} as IVerifyAuthenticationAnswer]
    );
    expect(transunionMock.sendVerifyAuthenticationQuestions).toHaveBeenCalled();
  });

  it("should run state.updateTransunionQuestionsAsync on updateCurrentRawQuestionsAsync", () => {
    service.updateCurrentRawQuestionsAsync("");
    expect(statesvcMock.updateTransunionQuestionsAsync).toHaveBeenCalled();
  });

  it("should run transunion.sendEnrollRequest on sendEnrollRequest", () => {
    service.sendEnrollRequest();
    expect(transunionMock.sendEnrollRequest).toHaveBeenCalled();
  });

  it("should run transunion.sendCompleteOnboarding on sendCompleteOnboarding", () => {
    service.sendCompleteOnboarding();
    expect(transunionMock.sendCompleteOnboarding).toHaveBeenCalled();
  });

  it("should run state.incrementAuthAttemptsAsync on incrementAuthAttempt", () => {
    service.incrementAuthAttempt();
    expect(statesvcMock.incrementAuthAttemptsAsync).toHaveBeenCalled();
  });

  it("should run state.initiateTransunionPinDetailsAsync on startPinClock", () => {
    service.startPinClock();
    expect(statesvcMock.initiateTransunionPinDetailsAsync).toHaveBeenCalled();
  });

  it("should run state.incrementTransunionPinRequestAsync on incrementPinRequest", () => {
    service.incrementPinRequest();
    expect(statesvcMock.incrementTransunionPinRequestAsync).toHaveBeenCalled();
  });

  it("should run state.incrementTransunionPinAttemptsAsync on incrementPinAttempts", () => {
    service.incrementPinAttempts();
    expect(statesvcMock.incrementTransunionPinAttemptsAsync).toHaveBeenCalled();
  });

  it("should run state.initiateKBADetailsAsync on startKbaClock", () => {
    service.startKbaClock();
    expect(statesvcMock.initiateKBADetailsAsync).toHaveBeenCalled();
  });

  it("should run store.dispatch on setCreditReport", () => {
    service.setCreditReport({ report: {}, modifiedOn: "" } as ICreditReport);
    expect(storeMock.dispatch).toHaveBeenCalled();
  });

  it("should run tu.parsers.onboarding.parseOTPQuestion on getOTPQuestion", () => {
    let spy = spyOn(tu.parsers.onboarding, "parseOTPQuestion");
    service.getOTPQuestion({} as ITransunionKBAQuestions);
    expect(spy).toHaveBeenCalled();
  });

  it("should run tu.parsers.onboarding.parseOTPSendTextAnswer on getOTPSendTextAnswer", () => {
    let spy = spyOn(tu.parsers.onboarding, "parseOTPSendTextAnswer");
    service.getOTPSendTextAnswer({} as ITransunionKBAQuestion);
    expect(spy).toHaveBeenCalled();
  });

  it("should run tu.parsers.onboarding.parsePassCodeQuestion on getPassCodeQuestion", () => {
    let spy = spyOn(tu.parsers.onboarding, "parsePassCodeQuestion");
    service.getPassCodeQuestion({} as ITransunionKBAQuestions);
    expect(spy).toHaveBeenCalled();
  });

  it("should run tu.parsers.onboarding.parsePassCodeAnswer on getPassCodeAnswer", () => {
    let spy = spyOn(tu.parsers.onboarding, "parsePassCodeAnswer");
    service.getPassCodeAnswer({} as ITransunionKBAQuestion, "");
    expect(spy).toHaveBeenCalled();
  });

  it("should run incrementAuthAttempt on bailoutFromOnboarding", () => {
    let spy = spyOn(service, "incrementAuthAttempt");
    service.bailoutFromOnboarding(
      {} as Partial<TransunionInput>,
      {} as ITUServiceResponse<any | undefined>
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should run analytics.fireErrorEvent on bailoutFromOnboarding", fakeAsync(() => {
    service.bailoutFromOnboarding({} as Partial<TransunionInput>);
    tick();
    expect(analyticsMock.fireErrorEvent).toHaveBeenCalled();
  }));

  it("should run router.navigate on bailoutFromOnboarding", fakeAsync(() => {
    service.bailoutFromOnboarding({} as Partial<TransunionInput>);
    tick();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it("should run tu.queries.exceptions.isErrorCritical on bailoutFromOnboarding", fakeAsync(() => {
    let spy = spyOn(tu.queries.exceptions, "isErrorCritical");
    let spy2 = spyOn(service, "incrementAuthAttempt");
    spy2.and.returnValue(
      Promise.resolve({
        agencies: { transunion: {} },
      } as UpdateAppDataInput)
    );
    service.bailoutFromOnboarding(
      {} as Partial<TransunionInput>,
      {} as ITUServiceResponse<any | undefined>
    );
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it("should run state.updateAgenciesAsync on bailoutFromOnboarding", fakeAsync(() => {
    let spy1 = spyOn(service, "suspendUser");
    spy1.and.returnValue(Promise.resolve());
    let spy2 = spyOn(service, "incrementAuthAttempt");
    spy2.and.returnValue(
      Promise.resolve({
        agencies: { transunion: { authAttempt: 2 } },
      } as UpdateAppDataInput)
    );
    service.bailoutFromOnboarding(
      {} as Partial<TransunionInput>,
      {} as ITUServiceResponse<any | undefined>
    );
    tick();
    expect(statesvcMock.updateAgenciesAsync).toHaveBeenCalled();
  }));

  it("should run handleSuspension on bailoutFromOnboarding", fakeAsync(() => {
    let spy1 = spyOn(service, "suspendUser");
    spy1.and.returnValue(Promise.resolve());
    spyOn(service, "handleSuspension");
    let spy2 = spyOn(service, "incrementAuthAttempt");
    spy2.and.returnValue(
      Promise.resolve({
        agencies: { transunion: { authAttempt: 2 } },
      } as UpdateAppDataInput)
    );
    service.bailoutFromOnboarding(
      {} as Partial<TransunionInput>,
      {} as ITUServiceResponse<any | undefined>
    );
    tick();
    expect(service.handleSuspension).toHaveBeenCalled();
  }));

  it("should run routerMock.navigate on bailoutFromOnboarding", fakeAsync(() => {
    let spy1 = spyOn(service, "suspendUser");
    spy1.and.returnValue(Promise.resolve());
    spyOn(service, "handleSuspension");
    let spy2 = spyOn(service, "incrementAuthAttempt");
    spy2.and.returnValue(
      Promise.resolve({
        agencies: { transunion: { authAttempt: 0 } },
      } as UpdateAppDataInput)
    );
    service.bailoutFromOnboarding(
      {} as Partial<TransunionInput>,
      {} as ITUServiceResponse<any | undefined>
    );
    tick();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it("should run updateGetAuthenticationQuestions on handleGetAuthenticationBailout", () => {
    let spy = spyOn(service, "updateGetAuthenticationQuestions");
    service.handleGetAuthenticationBailout(
      {} as ITUServiceResponse<any | undefined>
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should run suspendUser on handleSuspension", () => {
    let spy = spyOn(service, "suspendUser");
    service.handleSuspension({} as AppStatusReason);
    expect(spy).toHaveBeenCalled();
  });

  it("should run router.navigate on handleSuspension", fakeAsync(() => {
    let spy1 = spyOn(service, "suspendUser");
    spy1.and.returnValue(Promise.resolve());
    service.handleSuspension({} as AppStatusReason);
    tick();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it("should run bc.generators.createSuspendedStatus on suspendUser", fakeAsync(() => {
    statesvcMock.state$ = { value: { appData: {} as AppDataStateModel } };
    let spy1 = spyOn(bc.generators, "createSuspendedStatus");
    service.suspendUser({
      status: {} as AppStatus,
      reason: {} as AppStatusReason,
      duration: 1,
    });
    tick();
    expect(spy1).toHaveBeenCalled();
  }));

  it("should run statesvc.updateStateDBSyncAsync on suspendUser", fakeAsync(() => {
    statesvcMock.state$ = {
      value: { appData: { id: "1" } as AppDataStateModel },
    };
    let spy1 = spyOn(bc.generators, "createSuspendedStatus");
    service.suspendUser({
      status: {} as AppStatus,
      reason: {} as AppStatusReason,
      duration: 1,
    });
    tick();
    expect(statesvcMock.updateStateDBSyncAsync).toHaveBeenCalled();
  }));
});
