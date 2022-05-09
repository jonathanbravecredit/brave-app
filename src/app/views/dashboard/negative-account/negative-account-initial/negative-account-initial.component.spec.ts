import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { of } from 'rxjs';

import { NegativeAccountInitialComponent } from './negative-account-initial.component';

// private router: Router,
// private statesvc: StateService,
// private creditReportService: CreditreportService,
// private disputeService: DisputeService,
// private route: ActivatedRoute,

describe('NegativeAccountInitialComponent', () => {
  let component: NegativeAccountInitialComponent;
  let fixture: ComponentFixture<NegativeAccountInitialComponent>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [NegativeAccountInitialComponent],
      imports: [SharedPipesModule],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAccountInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
