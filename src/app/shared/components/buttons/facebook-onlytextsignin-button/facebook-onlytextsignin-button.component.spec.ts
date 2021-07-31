import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookOnlytextsigninButtonComponent } from './facebook-onlytextsignin-button.component';

describe('FacebookOnlytextsigninButtonComponent', () => {
  let component: FacebookOnlytextsigninButtonComponent;
  let fixture: ComponentFixture<FacebookOnlytextsigninButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookOnlytextsigninButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookOnlytextsigninButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
