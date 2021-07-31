import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycPhonenumberPureComponent } from './kyc-phonenumber-pure.component';

describe('KycPhonenumberPureComponent', () => {
  let component: KycPhonenumberPureComponent;
  let fixture: ComponentFixture<KycPhonenumberPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycPhonenumberPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycPhonenumberPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
