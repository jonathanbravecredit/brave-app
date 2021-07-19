import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesOverviewInitialView } from './disputes-overview-initial.view';

describe('DisputesOverviewInitialView', () => {
  let component: DisputesOverviewInitialView;
  let fixture: ComponentFixture<DisputesOverviewInitialView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesOverviewInitialView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesOverviewInitialView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
