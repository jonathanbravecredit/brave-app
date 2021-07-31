import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleIconsigninButtonComponent } from './google-iconsignin-button.component';

describe('GoogleIconsigninButtonComponent', () => {
  let component: GoogleIconsigninButtonComponent;
  let fixture: ComponentFixture<GoogleIconsigninButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleIconsigninButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleIconsigninButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
