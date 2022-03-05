import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalChoiceHeaderComponent } from './goal-choice-header.component';

describe('GoalChoiceHeaderComponent', () => {
  let component: GoalChoiceHeaderComponent;
  let fixture: ComponentFixture<GoalChoiceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalChoiceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalChoiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
