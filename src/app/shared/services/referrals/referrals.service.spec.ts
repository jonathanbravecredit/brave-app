import { HttpClient } from "@angular/common/http";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { of, Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { IamService } from "../auth/iam.service";
import { FeatureFlagsService } from "../featureflags/feature-flags.service";

import { ReferralsService } from "./referrals.service";

// private feature: FeatureFlagsService,
// private http: HttpClient,
// private auth: AuthService,
// private iam: IamService,

describe("ReferralsService", () => {
  let service: ReferralsService;
  class FeatureMock {
    public referrals$ = of()
  };
  let httpMock: any;
  let authMock: any;
  let iamMock: any;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj("HttpClient", ["put", "get"]);
    authMock = jasmine.createSpyObj("AuthService", ["getIdTokenJwtTokens"]);
    iamMock = jasmine.createSpyObj("IamService", ["signRequest"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: FeatureFlagsService, useClass: FeatureMock },
        { provide: HttpClient, useValue: httpMock },
        { provide: AuthService, useValue: authMock },
        { provide: IamService, useValue: iamMock },
      ],
    });
    service = TestBed.inject(ReferralsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it('it should run isActiveSub$?.unsubscribe on destroy', () => {
    service.isActiveSub$ = new Subscription()
    spyOn(service.isActiveSub$, 'unsubscribe')
    service.ngOnDestroy()
    expect(service.isActiveSub$.unsubscribe).toHaveBeenCalled()
  })

  it('it should run iam.signRequest on validateReferralCode', () => {
    service.validateReferralCode('test')
    expect(iamMock.signRequest).toHaveBeenCalled()
  })

  it('it should run iam.signRequest on on createReferral if this.isActive', () => {
    service.isActive = true
    service.createReferral('test','test')
    expect(iamMock.signRequest).toHaveBeenCalled()
  })

  it('it should run auth.getIdTokenJwtTokens on on getReferral', () => {
    service.getReferral()
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled()
  })

});
