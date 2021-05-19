import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupThankyouComponent } from './signup-thankyou.component';

describe('SignupThankyouComponent', () => {
  let component: SignupThankyouComponent;
  let fixture: ComponentFixture<SignupThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupThankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
