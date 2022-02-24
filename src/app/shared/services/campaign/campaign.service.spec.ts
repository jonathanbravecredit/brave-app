import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '@shared/services/auth/auth.service';

import { CampaignService } from './campaign.service';

//private http: HttpClient, private auth: AuthService

describe('CampaignService', () => {
  let service: CampaignService;
  let httpMock: any;
  let authMock: any;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('HttpClient', ['get']);
    authMock = jasmine.createSpyObj('AuthService', ['getIdTokenJwtTokens']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock },
        { provide: AuthService, useValue: authMock },
      ],
    });
    service = TestBed.inject(CampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
