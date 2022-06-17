import { TestBed } from "@angular/core/testing";

import { WaitlistService } from "./waitlist.service";
import { ActivatedRoute } from "@angular/router";
import { InterstitialService } from "../../shared/services/interstitial/interstitial.service";
import { AuthService } from "../../shared/services/auth/auth.service";
import { IamService } from "../../shared/services/auth/iam.service";
import { NeverbounceService } from "../../shared/services/neverbounce/neverbounce.service";
import { of, BehaviorSubject } from "rxjs";

// private route: ActivatedRoute,
// private neverBounce: NeverbounceService,
// private iam: IamService,
// private Auth: AuthService,
// private InterstitialService: InterstitialService

describe("WaitlistService", () => {
  let service: WaitlistService;
  let routeMock: any;
  let neverBounceMock: any;
  let iamMock: any;
  let AuthMock: any;
  let InterstitialServiceMock: any;

  beforeEach(() => {
    routeMock = jasmine.createSpyObj("ActivatedRoute", [""], { queryParams: of({ referralCode: "" }) });
    neverBounceMock = jasmine.createSpyObj("NeverbounceService", ["validateEmail"]);
    iamMock = jasmine.createSpyObj("IamService", ["signRequest"]);
    AuthMock = jasmine.createSpyObj("AuthService", ["signUp"]);
    InterstitialServiceMock = jasmine.createSpyObj("InterstitialService", [""], {
      fetching$: new BehaviorSubject<boolean>(false),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: NeverbounceService, useValue: neverBounceMock },
        { provide: IamService, useValue: iamMock },
        { provide: AuthService, useValue: AuthMock },
        { provide: InterstitialService, useValue: InterstitialServiceMock },
      ],
    });
    service = TestBed.inject(WaitlistService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
