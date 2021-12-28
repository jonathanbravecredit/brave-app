import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { OutlineInputPhoneComponent } from './outline-input-phone.component';

describe('OutlineInputPhoneComponent', () => {
  let component: OutlineInputPhoneComponent;
  let fixture: ComponentFixture<OutlineInputPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlineInputPhoneComponent ],
      providers: [FormBuilder],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
