import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineOnlytextButtonComponent } from './outline-onlytext-button.component';

describe('OutlineOnlytextButtonComponent', () => {
  let component: OutlineOnlytextButtonComponent;
  let fixture: ComponentFixture<OutlineOnlytextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlineOnlytextButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineOnlytextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
