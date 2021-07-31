import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDobFormComponent } from './select-dob-form.component';

describe('SelectDobFormComponent', () => {
  let component: SelectDobFormComponent;
  let fixture: ComponentFixture<SelectDobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDobFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
