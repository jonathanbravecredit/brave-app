import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitlistWelcomeComponent } from './waitlist-welcome.component';

describe('WaitlistWelcomeComponent', () => {
  let component: WaitlistWelcomeComponent;
  let fixture: ComponentFixture<WaitlistWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitlistWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
