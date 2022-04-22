import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { AuthService } from "../auth/auth.service";

import { PaymentsService } from "./payments.service";

//private http: HttpClient, private auth: AuthService

describe("PaymentsService", () => {
  let service: PaymentsService;
  let httpMock: any;
  let authMock: any;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj("HttpClient", ["get"]);
    authMock = jasmine.createSpyObj("AuthService", ["getIdTokenJwtTokens"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock },
        { provide: AuthService, useValue: authMock },
      ],
    });
    service = TestBed.inject(PaymentsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call getIdTokenJwtTokens on getPayments", () => {
    service.getPayments()
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled();
  });
});
