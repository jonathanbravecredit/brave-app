import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycRetryComponent } from './kyc-retry.component';

describe('KycRetryComponent', () => {
  let component: KycRetryComponent;
  let fixture: ComponentFixture<KycRetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycRetryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycRetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
