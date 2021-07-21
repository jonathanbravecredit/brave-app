import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesOverviewHistoryPureView } from './disputes-overview-history-pure.view';

describe('DisputesOverviewHistoryPureView', () => {
  let component: DisputesOverviewHistoryPureView;
  let fixture: ComponentFixture<DisputesOverviewHistoryPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesOverviewHistoryPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesOverviewHistoryPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
