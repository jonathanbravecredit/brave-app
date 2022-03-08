import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalChoiceCardComponent } from './goal-choice-card.component';

describe('GoalChoiceCardComponent', () => {
  let component: GoalChoiceCardComponent;
  let fixture: ComponentFixture<GoalChoiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalChoiceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalChoiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
