import { TestBed } from '@angular/core/testing';

import { WaitlistWelcomeService } from './waitlist-welcome.service';

describe('WaitlistWelcomeService', () => {
  let service: WaitlistWelcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitlistWelcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
