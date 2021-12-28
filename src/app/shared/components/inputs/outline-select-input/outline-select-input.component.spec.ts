import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { OutlineSelectInputComponent } from './outline-select-input.component';

describe('OutlineSelectInputComponent', () => {
  let component: OutlineSelectInputComponent;
  let fixture: ComponentFixture<OutlineSelectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlineSelectInputComponent ],
      providers: [FormBuilder],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
