import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinePaymentsComponent } from './tradeline-payments.component';

describe('TradelinePaymentsComponent', () => {
  let component: TradelinePaymentsComponent;
  let fixture: ComponentFixture<TradelinePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinePaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
