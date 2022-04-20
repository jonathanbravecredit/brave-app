import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import { AuthService } from '@shared/services/auth/auth.service';
import { IamService } from '../auth/iam.service';

import { CampaignService } from './campaign.service';

//private http: HttpClient, private auth: AuthService

describe('CampaignService', () => {
  let service: CampaignService;
  let authMock: any;
  let iamMock: any;

  beforeEach(() => {
    authMock = jasmine.createSpyObj('AuthService', ['getIdTokenJwtTokens']);
    iamMock = jasmine.createSpyObj('IamService', ['signRequest']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: authMock },
        { provide: IamService, useValue: iamMock },
      ],
    });
    service = TestBed.inject(CampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run getIdTokenJwtTokens on getCampaign', () => {
    service.getCampaign()
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled();
  });

  it('should run signRequest on getCampaignPublic', () => {
    service.getCampaignPublic()
    expect(iamMock.signRequest).toHaveBeenCalled();
  });

  it('should run fetch on getCampaignPublic', fakeAsync(() => {
    let spy = spyOn(window, 'fetch')
    service.getCampaignPublic()
    tick()
    expect(spy).toHaveBeenCalled();
  }));

  it('should run getCampaignPublic on setCampaignActive', fakeAsync(() => {
    let spy = spyOn(service, 'getCampaignPublic')
    service.setCampaignActive()
    tick()
    expect(spy).toHaveBeenCalled();
  }));

  it('should set isActive to false on setCampaignActive', fakeAsync(() => {
    let spy = spyOn(service, 'getCampaignPublic')
    spy.and.returnValue(Promise.resolve(null))
    service.setCampaignActive()
    tick()
    expect(service.isActive).toBeFalse();
  }));

  it('should run isActive$.next on setCampaignActive if !campaign', fakeAsync(() => {
    let spy = spyOn(service, 'getCampaignPublic')
    spy.and.returnValue(Promise.resolve(null))
    spyOn(service.isActive$, 'next')
    service.setCampaignActive()
    tick()
    expect(service.isActive$.next).toHaveBeenCalled();
  }));

  it('should run isActive$.next on setCampaignActive if campaign', fakeAsync(() => {
    let spy = spyOn(service, 'getCampaignPublic')
    spy.and.returnValue(Promise.resolve({} as ICampaign))
    spyOn(service.isActive$, 'next')
    service.setCampaignActive()
    tick()
    expect(service.isActive$.next).toHaveBeenCalled();
  }));

});
