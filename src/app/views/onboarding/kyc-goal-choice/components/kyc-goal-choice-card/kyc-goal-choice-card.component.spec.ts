import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycGoalChoiceCardComponent } from './kyc-goal-choice-card.component';

describe('KycGoalChoiceCardComponent', () => {
  let component: KycGoalChoiceCardComponent;
  let fixture: ComponentFixture<KycGoalChoiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycGoalChoiceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycGoalChoiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
