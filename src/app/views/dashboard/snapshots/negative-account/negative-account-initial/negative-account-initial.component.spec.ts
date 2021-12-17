import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { IMergeReport } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { AppDataStateModel } from '@store/app-data';
import { BehaviorSubject, of } from 'rxjs';

import { NegativeAccountInitialComponent } from './negative-account-initial.component';

class RouteMock {
  data = of();
}

class StateServiceMock {
  state:
    | {
        appData: AppDataStateModel;
      }
    | undefined;
}

class CreditReportServiceMock {
  tuReport$ = new BehaviorSubject<IMergeReport>({} as IMergeReport);
}

describe('NegativeAccountInitialComponent', () => {
  let component: NegativeAccountInitialComponent;
  let fixture: ComponentFixture<NegativeAccountInitialComponent>;
  let routerMock: any;
  let disputeServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    routerMock.navigate.and.returnValue(null);

    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['sendDisputePreflightCheck']);
    disputeServiceMock.sendDisputePreflightCheck.and.returnValue(of().toPromise());

    await TestBed.configureTestingModule({
      imports: [SharedPipesModule],
      declarations: [NegativeAccountInitialComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: StateService, useClass: StateServiceMock },
        { provide: CreditreportService, useClass: CreditReportServiceMock },
        { provide: DisputeService, useValue: disputeServiceMock },
      ],
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
