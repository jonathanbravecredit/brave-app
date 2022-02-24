import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycGoalChoiceComponent } from './kyc-goal-choice.component';

describe('KycGoalChoiceComponent', () => {
  let component: KycGoalChoiceComponent;
  let fixture: ComponentFixture<KycGoalChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycGoalChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycGoalChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
