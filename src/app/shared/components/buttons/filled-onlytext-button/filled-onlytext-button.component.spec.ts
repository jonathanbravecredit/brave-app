import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledOnlytextButtonComponent } from './filled-onlytext-button.component';

describe('FilledOnlytextButtonComponent', () => {
  let component: FilledOnlytextButtonComponent;
  let fixture: ComponentFixture<FilledOnlytextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledOnlytextButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledOnlytextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
