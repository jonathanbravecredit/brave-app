import { TestBed } from '@angular/core/testing';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { BehaviorSubject } from 'rxjs';
import { SpinnerButtonDirective } from './spinner-button.directive';

describe('SpinnerButtonDirective', () => {
  let interstitialServiceMock: any;
  let fetchingMock$: any;
  beforeEach(async () => {
    interstitialServiceMock = jasmine.createSpyObj('InterstitialService', ['fetching$']);
    fetchingMock$ = new BehaviorSubject<boolean>(false);
    interstitialServiceMock.fetching$.and.returnValue(fetchingMock$);

    await TestBed.configureTestingModule({
      providers: [{ provide: InterstitialService, useValue: interstitialServiceMock }],
    });
  });
  it('should create an instance', () => {
    const directive = new SpinnerButtonDirective(interstitialServiceMock);
    expect(directive).toBeTruthy();
  });
});
