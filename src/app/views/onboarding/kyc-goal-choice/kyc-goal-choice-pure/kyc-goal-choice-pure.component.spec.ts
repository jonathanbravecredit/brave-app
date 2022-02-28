import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycGoalChoicePureComponent } from './kyc-goal-choice-pure.component';

describe('KycGoalChoicePureComponent', () => {
  let component: KycGoalChoicePureComponent;
  let fixture: ComponentFixture<KycGoalChoicePureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycGoalChoicePureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycGoalChoicePureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
