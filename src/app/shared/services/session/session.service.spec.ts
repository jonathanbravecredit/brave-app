import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '@shared/services/auth/auth.service';

import { SessionService } from './session.service';

//private http: HttpClient, private auth: AuthService

describe('SessionService', () => {
  let service: SessionService;
  let httpMock: any;
  let authMock: any;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('HttpClient', ['']);
    authMock = jasmine.createSpyObj('AuthService', ['']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock },
        { provide: AuthService, useValue: authMock },
      ],
    });
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
