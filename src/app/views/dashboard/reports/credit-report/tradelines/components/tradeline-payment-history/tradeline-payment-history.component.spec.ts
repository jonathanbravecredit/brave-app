import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IMonthyPayStatusItem } from '@shared/interfaces';
import { ModalService } from '@shared/services/modal/modal.service';
import {
  MONTH_ABBREVIATIONS,
  MONTH_DEFAULTS,
} from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/constants';
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

  it('should run parsePaymentHistory on init', () => {
    spyOn(component, 'parsePaymentHistory');

    component.ngOnInit();

    expect(component.parsePaymentHistory).toHaveBeenCalled;
  });

  it('should run appendModalToBody on showModal', () => {
    component.showModal();

    expect(modalServiceMock.appendModalToBody).toHaveBeenCalled;
  });

  it('should return set expected value if payment keys length is 0', () => {
    let res = component.parsePaymentHistory();

    expect(res).toEqual({
      headers: {
        year: null,
        months: MONTH_ABBREVIATIONS,
      },
      years: [0, 1, 2].map((item, i) => {
        let dte = new Date();
        let year = dte.getFullYear() - i;
        return {
          year: year.toString(),
          months: ['u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u'],
        };
      }),
    });
  });

  it('should return months when parseMonthlyPayments with monthlyPayments as undefined', () => {
    let res = component.parseMonthlyPayments(1, undefined);

    expect(res).toEqual([...MONTH_DEFAULTS]);
  });

  it('should return the expected value when monthlyPayments if passed in', () => {
    let monthlyPaymentMock = [{ date: '2022-03-31T19:01:21.041Z', status: 'testStatus' } as IMonthyPayStatusItem];

    let res = component.parseMonthlyPayments(2022, monthlyPaymentMock);

    expect(res).toEqual(['u', 'u', 'teststatus', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u']);
  });
});
