import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledSpinningButtonComponent } from './filled-spinning-button.component';

describe('FilledSpinningButtonComponent', () => {
  let component: FilledSpinningButtonComponent;
  let fixture: ComponentFixture<FilledSpinningButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledSpinningButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledSpinningButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
