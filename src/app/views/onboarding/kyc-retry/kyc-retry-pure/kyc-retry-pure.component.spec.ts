import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycRetryPureComponent } from './kyc-retry-pure.component';

describe('KycRetryPureComponent', () => {
  let component: KycRetryPureComponent;
  let fixture: ComponentFixture<KycRetryPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycRetryPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycRetryPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
