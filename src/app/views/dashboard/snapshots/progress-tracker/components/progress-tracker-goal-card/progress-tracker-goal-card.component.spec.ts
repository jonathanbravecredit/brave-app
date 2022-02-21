import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTrackerGoalCardComponent } from './progress-tracker-goal-card.component';

describe('ProgressTrackerGoalCardComponent', () => {
  let component: ProgressTrackerGoalCardComponent;
  let fixture: ComponentFixture<ProgressTrackerGoalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressTrackerGoalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerGoalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
