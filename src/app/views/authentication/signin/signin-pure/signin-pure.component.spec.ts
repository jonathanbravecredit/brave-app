import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPureComponent } from './signin-pure.component';

describe('SigninPureComponent', () => {
  let component: SigninPureComponent;
  let fixture: ComponentFixture<SigninPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
