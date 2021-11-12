import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUtilizationPureView } from './credit-utilization-pure.view';

describe('CreditUtilizationPureView', () => {
  let component: CreditUtilizationPureView;
  let fixture: ComponentFixture<CreditUtilizationPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditUtilizationPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
