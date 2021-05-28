import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycWelcomePureComponent } from './kyc-welcome-pure.component';

describe('KycWelcomePureComponent', () => {
  let component: KycWelcomePureComponent;
  let fixture: ComponentFixture<KycWelcomePureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycWelcomePureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycWelcomePureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
