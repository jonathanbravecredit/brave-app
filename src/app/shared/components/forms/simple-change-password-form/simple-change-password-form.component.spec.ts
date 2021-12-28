import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SimpleChangePasswordFormComponent } from './simple-change-password-form.component';

describe('SimpleChangePasswordFormComponent', () => {
  let component: SimpleChangePasswordFormComponent;
  let fixture: ComponentFixture<SimpleChangePasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleChangePasswordFormComponent ],
      providers: [FormBuilder],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleChangePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
