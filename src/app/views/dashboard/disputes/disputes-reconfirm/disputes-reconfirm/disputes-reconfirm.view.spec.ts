import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { StateService } from '@shared/services/state/state.service';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';

import { DisputesReconfirmView } from './disputes-reconfirm.view';

// private router: Router,
// private route: ActivatedRoute,
// private disputeService: DisputeService,
// private statesvc: StateService,
// private creditReportService: CreditreportService,

describe('DisputesReconfirmView', () => {
  let component: DisputesReconfirmView;
  let fixture: ComponentFixture<DisputesReconfirmView>;
  let storeMock: any;
  let routerMock: any;
  let statesvcMock: any;
  let disputeServiceMock: any;

  beforeEach(async () => {
    storeMock = jasmine.createSpyObj('Store', ['select']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    statesvcMock = jasmine.createSpyObj('StateService', [''], [{ state: { appData: { id: 'testIdString' } } }]);
    statesvcMock.state = { appData: { id: 'testIdString' } };
    disputeServiceMock = jasmine.createSpyObj('DisputeService', [
      'setPersonalItem',
      'setPublicItem',
      'setTradelineItem',
    ]);

    await TestBed.configureTestingModule({
      declarations: [DisputesReconfirmView],
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: Router, useValue: routerMock },
        { provide: StateService, useValue: statesvcMock },
        { provide: DisputeService, useValue: disputeServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesReconfirmView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDisputePersonalClick', () => {
    // it('should throw an error if id is falsy', () => {
    //   //todo figure out how to fix this
    // })

    it('should run setPersonalItem if id is truthy', () => {
      component.onDisputePersonalClick({} as IPersonalItemsDetailsConfig);

      expect(disputeServiceMock.setPersonalItem).toHaveBeenCalled();
    });

    it('should run navigate if id is truthy', () => {
      component.onDisputePersonalClick({} as IPersonalItemsDetailsConfig);

      expect(routerMock.navigate).toHaveBeenCalled();
    });
  });

  describe('onDisputePublicClick', () => {
    // it('should throw an error if id is falsy', () => {
    //   //todo figure out how to fix this
    // })

    it('should run setPublicItem if id is truthy', () => {
      component.onDisputePublicClick({} as IPublicPartition);

      expect(disputeServiceMock.setPublicItem).toHaveBeenCalled();
    });

    it('should run navigate if id is truthy', () => {
      component.onDisputePublicClick({} as IPublicPartition);

      expect(routerMock.navigate).toHaveBeenCalled();
    });
  });

  describe('onDisputeTradelineClick', () => {
    // it('should throw an error if id is falsy', () => {
    //   //todo figure out how to fix this
    // })

    it('should run setTradelineItem if id is truthy', () => {
      component.onDisputeTradelineClick({} as ITradeLinePartition);

      expect(disputeServiceMock.setTradelineItem).toHaveBeenCalled();
    });

    it('should run navigate if id is truthy', () => {
      component.onDisputeTradelineClick({} as ITradeLinePartition);

      expect(routerMock.navigate).toHaveBeenCalled();
    });
  });
});
