import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycExceptionsPureView } from './kyc-exceptions-pure.view';

describe('KycExceptionsPureView', () => {
  let component: KycExceptionsPureView;
  let fixture: ComponentFixture<KycExceptionsPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycExceptionsPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycExceptionsPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
