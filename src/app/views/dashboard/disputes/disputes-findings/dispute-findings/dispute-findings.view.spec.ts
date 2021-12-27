import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IDispute } from '@shared/interfaces/disputes';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { BehaviorSubject, of } from 'rxjs';

import { DisputeFindingsView } from './dispute-findings.view';

describe('DisputeFindingsView', () => {
  let component: DisputeFindingsView;
  let fixture: ComponentFixture<DisputeFindingsView>;
  class RouteMock {
    data = of({
      reports: {
        investigationResults: {
          record: null,
        },
        creditBureauResults: {
          record: null,
        },
      },
    });
  }
  let disputeServiceMock: any;

  beforeEach(async () => {
    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['getUserStateOfResidence']);
    disputeServiceMock.currentDispute$ = new BehaviorSubject<IDispute>({} as IDispute);
    await TestBed.configureTestingModule({
      declarations: [DisputeFindingsView],
      providers: [
        { provide: ActivatedRoute, useClass: RouteMock },
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
});
