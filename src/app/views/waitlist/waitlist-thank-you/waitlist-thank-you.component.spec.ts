import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistThankYouComponent } from './waitlist-thank-you.component';

describe('WaitlistThankYouComponent', () => {
  let component: WaitlistThankYouComponent;
  let fixture: ComponentFixture<WaitlistThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlistThankYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
