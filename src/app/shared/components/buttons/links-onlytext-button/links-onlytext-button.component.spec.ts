import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksOnlytextButtonComponent } from './links-onlytext-button.component';

describe('LinksOnlytextButtonComponent', () => {
  let component: LinksOnlytextButtonComponent;
  let fixture: ComponentFixture<LinksOnlytextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksOnlytextButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksOnlytextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
