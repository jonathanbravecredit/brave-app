import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesOverviewHistoryView } from './disputes-overview-history.view';

describe('DisputesOverviewHistoryView', () => {
  let component: DisputesOverviewHistoryView;
  let fixture: ComponentFixture<DisputesOverviewHistoryView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesOverviewHistoryView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesOverviewHistoryView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
