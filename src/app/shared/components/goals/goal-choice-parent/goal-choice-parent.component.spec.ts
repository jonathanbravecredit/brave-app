import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalChoiceParentComponent } from './goal-choice-parent.component';

describe('GoalChoiceParentComponent', () => {
  let component: GoalChoiceParentComponent;
  let fixture: ComponentFixture<GoalChoiceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalChoiceParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalChoiceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
