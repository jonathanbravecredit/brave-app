import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { KycSsnPureComponent } from './kyc-ssn-pure.component';

describe('KycSsnPureComponent', () => {
  let component: KycSsnPureComponent;
  let fixture: ComponentFixture<KycSsnPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KycSsnPureComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycSsnPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
