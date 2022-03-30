import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '@shared/services/modal/modal.service';
import { ITradelinePaymentHistory } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/interfaces';

import { TradelinePaymentHistoryComponent } from './tradeline-payment-history.component';

describe('TradelinePaymentHistoryComponent', () => {
  let component: TradelinePaymentHistoryComponent;
  let fixture: ComponentFixture<TradelinePaymentHistoryComponent>;
  let modalServiceMock: any;

  beforeEach(async () => {
    modalServiceMock = jasmine.createSpyObj('ModalService', ['appendModalToBody']);
    await TestBed.configureTestingModule({
      declarations: [TradelinePaymentHistoryComponent],
      providers: [
        {
          provide: ModalService,
          useValue: modalServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinePaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
