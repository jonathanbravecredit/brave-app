import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IPublicPartition } from '@shared/interfaces';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { IProcessDisputePublicResult } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { BehaviorSubject } from 'rxjs';

import { DisputesPublicView } from './disputes-public.view';

describe('DisputesPublicView', () => {
  let component: DisputesPublicView;
  let fixture: ComponentFixture<DisputesPublicView>;
  let routerMock: any;
  let routeMock: any;
  let disputeServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    routeMock = jasmine.createSpyObj('ActivatedRoute', ['']);
    disputeServiceMock = jasmine.createSpyObj('DisputeService', ['clearDisputes', 'sendStartDispute', 'pushDispute']);
    disputeServiceMock.publicItem$ = new BehaviorSubject<IPublicPartition>({} as IPublicPartition);
    await TestBed.configureTestingModule({
      declarations: [DisputesPublicView],
      imports: [SharedPipesModule],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: DisputeService, useValue: disputeServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPublicView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run clearDisputes on destroy', () => {
    component.ngOnDestroy();

    expect(disputeServiceMock.clearDisputes).toHaveBeenCalled();
  });

  // it('should throw an error if publicItem is endefined', () => {
  //   expect(() => {
  //     return component.onProcessResult({ result: {}, publicItem: undefined } as IProcessDisputePublicResult);
  //   }).toThrow();
  // }); //todo figure out how to fix this

  it('should run pushDispute if publice item is not undefined', () => {
    component.onProcessResult({ result: {}, publicItem: { PublicRecord: {} } } as IProcessDisputePublicResult);

    expect(disputeServiceMock.pushDispute).toHaveBeenCalled();
  });

  it('should run sendStartDispute if isFinished is truthy', () => {
    component.onProcessResult({
      result: { isFinished: true },
      publicItem: { PublicRecord: {} },
    } as IProcessDisputePublicResult);

    expect(disputeServiceMock.sendStartDispute).toHaveBeenCalled();
  });

  it('should set viewDisplay to sent if success is truthy from sendStartDispute', fakeAsync(() => {
    disputeServiceMock.sendStartDispute.and.returnValue({ success: true, error: '', data: {} });

    component.onProcessResult({
      result: { isFinished: true },
      publicItem: { PublicRecord: {} },
    } as IProcessDisputePublicResult);

    tick()

    expect(component.viewDisplay).toEqual('sent');
  }));

  it('should run router.navigate if success is falsy from sendStartDispute', fakeAsync(() => {
    disputeServiceMock.sendStartDispute.and.returnValue({ success: false, error: '', data: {} });

    component.onProcessResult({
      result: { isFinished: true },
      publicItem: { PublicRecord: {} },
    } as IProcessDisputePublicResult);

    tick()

    expect(routerMock.navigate).toHaveBeenCalled()
  }));
});
