import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinePaymentIconComponent } from './tradeline-payment-icon.component';

describe('TradelinePaymentIconComponent', () => {
  let component: TradelinePaymentIconComponent;
  let fixture: ComponentFixture<TradelinePaymentIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinePaymentIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinePaymentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
