import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycGoalChoiceHeaderComponent } from './kyc-goal-choice-header.component';

describe('KycGoalChoiceHeaderComponent', () => {
  let component: KycGoalChoiceHeaderComponent;
  let fixture: ComponentFixture<KycGoalChoiceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycGoalChoiceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycGoalChoiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
