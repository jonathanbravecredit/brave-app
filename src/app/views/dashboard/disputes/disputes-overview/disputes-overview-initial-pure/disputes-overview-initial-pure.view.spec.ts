import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesOverviewInitialPureView } from './disputes-overview-initial-pure.view';

describe('DisputesOverviewInitialPureView', () => {
  let component: DisputesOverviewInitialPureView;
  let fixture: ComponentFixture<DisputesOverviewInitialPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesOverviewInitialPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesOverviewInitialPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
