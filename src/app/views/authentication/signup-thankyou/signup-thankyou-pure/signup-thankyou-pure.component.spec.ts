import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupThankyouPureComponent } from './signup-thankyou-pure.component';

describe('SignupThankyouPureComponent', () => {
  let component: SignupThankyouPureComponent;
  let fixture: ComponentFixture<SignupThankyouPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupThankyouPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupThankyouPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
