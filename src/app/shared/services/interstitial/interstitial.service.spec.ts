import { TestBed } from '@angular/core/testing';

import { InterstitialService } from './interstitial.service';

describe('InterstitialService', () => {
  let service: InterstitialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterstitialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
