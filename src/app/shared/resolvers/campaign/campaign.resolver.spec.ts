import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '@shared/services/auth/auth.service';

import { CampaignResolver } from './campaign.resolver';

//private http: HttpClient, private auth: AuthService

describe('CampaignResolver', () => {
  let resolver: CampaignResolver;
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
    resolver = TestBed.inject(CampaignResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
