import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IDispute } from '@shared/interfaces/disputes';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { BehaviorSubject, of, Subscription } from 'rxjs';

import { DisputeFindingsView } from './dispute-findings.view';

describe('DisputeFindingsView', () => {
  let component: DisputeFindingsView;
  let fixture: ComponentFixture<DisputeFindingsView>;
  let routeMock: any;
  let disputeServiceMock: any;

  beforeEach(async () => {
    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['getUserStateOfResidence']);
    disputeServiceMock.currentDispute$ = new BehaviorSubject<IDispute>({} as IDispute);
    routeMock = jasmine.createSpyObj('ActivatedRoute', [''], {
      data: of({
        reports: {
          investigationResults: {
            record: null,
          },
          creditBureauResults: {
            record: null,
          },
        },
      }),
    });

    await TestBed.configureTestingModule({
      declarations: [DisputeFindingsView],
      providers: [
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: DisputeService, useValue: disputeServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run disputeService.getUserStateOfResidence on init', () => {
    component.ngOnInit();

    expect(disputeServiceMock.getUserStateOfResidence).toHaveBeenCalled();
  });

  it('should unsubscribe from routeSub$ ondestroy', () => {
    spyOn(component.routeSub$!, 'unsubscribe')

    component.ngOnDestroy();

    expect(component.routeSub$?.unsubscribe).toHaveBeenCalled();
  });
});
