import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { IamService } from '@shared/services/auth/iam.service';
import { IpaddressService } from './ipaddress.service';

describe('IpaddressService', () => {
  let service: IpaddressService;
  let iamMock: any;

  beforeEach(() => {
    iamMock = jasmine.createSpyObj('IamService', ['signRequest']);
    TestBed.configureTestingModule({
      providers: [{ provide: IamService, useValue: iamMock }],
    });
    service = TestBed.inject(IpaddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call signRequest when calling validateIpAddress', fakeAsync(() => {
    service.validateIpAddress();
    tick(1);
    expect(iamMock.signRequest).toHaveBeenCalled();
  }));
});
