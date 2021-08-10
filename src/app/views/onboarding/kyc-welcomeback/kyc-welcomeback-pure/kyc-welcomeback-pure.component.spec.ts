import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycWelcomebackPureComponent } from './kyc-welcomeback-pure.component';

describe('KycWelcomebackPureComponent', () => {
  let component: KycWelcomebackPureComponent;
  let fixture: ComponentFixture<KycWelcomebackPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycWelcomebackPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycWelcomebackPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
