import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPureComponent } from './signup-pure.component';

describe('SignupPureComponent', () => {
  let component: SignupPureComponent;
  let fixture: ComponentFixture<SignupPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
