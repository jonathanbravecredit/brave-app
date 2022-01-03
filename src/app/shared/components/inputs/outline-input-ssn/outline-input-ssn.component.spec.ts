import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { OutlineInputSsnComponent } from './outline-input-ssn.component';

describe('OutlineInputSsnComponent', () => {
  let component: OutlineInputSsnComponent;
  let fixture: ComponentFixture<OutlineInputSsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlineInputSsnComponent ],
      providers: [FormBuilder],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineInputSsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
