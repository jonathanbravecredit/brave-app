import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IBorrower, IBorrowerName, ITradeLinePartition } from '@shared/interfaces';
import { FilterPersonalPipe } from '@shared/pipes/filterPersonal/filter-personal.pipe';
import { TradelineToDetailsPipe } from '@shared/pipes/tradeline-to-details/tradeline-to-details.pipe';
import { DOMHelper } from '@testing/dom-helper';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';

import { DisputesReconfirmPureView } from './disputes-reconfirm-pure.view';

describe('DisputesReconfirmPureView', () => {
  let component: DisputesReconfirmPureView;
  let fixture: ComponentFixture<DisputesReconfirmPureView>;
  let dh: DOMHelper<DisputesReconfirmPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisputesReconfirmPureView, FilterPersonalPipe, TradelineToDetailsPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesReconfirmPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dh = new DOMHelper(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the brave-account-summary-with-details if there are tradelines', () => {
    component.tradelines = [1, 2] as unknown as ITradeLinePartition[];
    fixture.detectChanges();
    expect(dh.count('brave-account-summary-with-details')).toEqual(2);
  });

  it('should show the Personal Information span if there are personalItems', () => {
    component.personalItems = [
      {
        key: 'prevaddress',
        value: {} as IBorrowerName,
        parsedValue: '',
        dateUpdated: '',
        borrower: {} as IBorrower,
        transformed: '',
      },
    ];
    fixture.detectChanges();
    expect(dh.count('span')).toEqual(2);
  });

  it('should show the Public Records span if there are publicItems', () => {
    component.publicItems = [{}] as IPublicItemsDetailsConfig[];
    fixture.detectChanges();
    expect(dh.count('span')).toEqual(2);
  });
});
