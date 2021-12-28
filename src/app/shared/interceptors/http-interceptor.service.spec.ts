import { TestBed } from "@angular/core/testing";

import { HttpInterceptorService } from "./http-interceptor.service";

describe("HttpInterceptorService", () => {
  let service: HttpInterceptorService;
  let httpInterceptorMock: any

  beforeEach(() => {

    httpInterceptorMock = jasmine.createSpyObj('HttpInterceptorService', ['intercept'])

    TestBed.configureTestingModule({
      providers: [{provide: HttpInterceptorService, useValue: httpInterceptorMock}],
    });
    service = TestBed.inject(HttpInterceptorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
