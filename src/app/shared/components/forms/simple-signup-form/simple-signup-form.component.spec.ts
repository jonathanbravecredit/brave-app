import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSignupFormComponent } from './simple-signup-form.component';

describe('SimpleSignupFormComponent', () => {
  let component: SimpleSignupFormComponent;
  let fixture: ComponentFixture<SimpleSignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSignupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
