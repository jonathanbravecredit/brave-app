import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycWelcomeComponent } from './kyc-welcome.component';

describe('KycWelcomeComponent', () => {
  let component: KycWelcomeComponent;
  let fixture: ComponentFixture<KycWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
