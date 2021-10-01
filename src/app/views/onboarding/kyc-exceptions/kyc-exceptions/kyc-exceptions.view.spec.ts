import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycExceptionsView } from './kyc-exceptions.view';

describe('KycExceptionsView', () => {
  let component: KycExceptionsView;
  let fixture: ComponentFixture<KycExceptionsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycExceptionsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycExceptionsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
