import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixRecommendationComponent } from './credit-mix-recommendation.component';
import { CreditMixService } from '../../credit-mix-service/credit-mix-service.service';
import { BehaviorSubject } from 'rxjs';
import { ICreditMixView } from '../../credit-mix.model';

describe('CreditMixRecommendationComponent', () => {
  let component: CreditMixRecommendationComponent;
  let fixture: ComponentFixture<CreditMixRecommendationComponent>;
  let creditMixServiceMock: any;

  beforeEach(async () => {
    creditMixServiceMock = jasmine.createSpyObj("CreditMixService", [""], {model$: new BehaviorSubject<ICreditMixView>({} as ICreditMixView)});
    await TestBed.configureTestingModule({
      declarations: [CreditMixRecommendationComponent],
      providers: [
        { provide: CreditMixService, useValue: creditMixServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set show to false on closeBox', () => {
    component.closeBox()
    expect(component.show).toBeFalse()
  })
});
