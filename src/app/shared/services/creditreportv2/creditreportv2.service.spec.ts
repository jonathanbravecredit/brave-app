import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { AuthService } from '@shared/services/auth/auth.service';

import { Creditreportv2Service } from './creditreportv2.service';

describe('Creditreportv2Service', () => {
  let service: Creditreportv2Service;
  let authMock: any;
  let storeMock: any;

  beforeEach(() => {
    authMock = jasmine.createSpyObj('AuthService', ['getIdTokenJwtTokens']);
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: authMock },
        { provide: Store, useValue: storeMock },
      ],
    });
    service = TestBed.inject(Creditreportv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
