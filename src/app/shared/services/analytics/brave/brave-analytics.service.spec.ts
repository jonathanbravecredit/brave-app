import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AuthService } from "@shared/services/auth/auth.service";

import { BraveAnalyticsService } from "./brave-analytics.service";

describe("BraveAnalyticsService", () => {
  let service: BraveAnalyticsService;
  let authMock: any;

  beforeEach(() => {
    authMock = jasmine.createSpyObj('AuthService', ['getUserSub', 'getIdTokenJwtTokens'])
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: AuthService, useValue: authMock}]
    });
    service = TestBed.inject(BraveAnalyticsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
