import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineInputComponent } from './outline-input.component';

describe('OutlineInputComponent', () => {
  let component: OutlineInputComponent;
  let fixture: ComponentFixture<OutlineInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlineInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
