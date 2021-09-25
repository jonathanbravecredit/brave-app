import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineInputHiddenComponent } from './outline-input-hidden.component';

describe('OutlineInputHiddenComponent', () => {
  let component: OutlineInputHiddenComponent;
  let fixture: ComponentFixture<OutlineInputHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlineInputHiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineInputHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
