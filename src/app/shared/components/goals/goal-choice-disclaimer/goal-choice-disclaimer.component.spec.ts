import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalChoiceDisclaimerComponent } from './goal-choice-disclaimer.component';

describe('GoalChoiceDisclaimerComponent', () => {
  let component: GoalChoiceDisclaimerComponent;
  let fixture: ComponentFixture<GoalChoiceDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalChoiceDisclaimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalChoiceDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
