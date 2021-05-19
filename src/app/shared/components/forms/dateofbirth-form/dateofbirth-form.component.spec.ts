import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateofbirthFormComponent } from './dateofbirth-form.component';

describe('DateofbirthFormComponent', () => {
  let component: DateofbirthFormComponent;
  let fixture: ComponentFixture<DateofbirthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateofbirthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateofbirthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
