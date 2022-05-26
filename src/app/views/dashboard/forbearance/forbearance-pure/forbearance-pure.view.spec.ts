import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradelineToAccountgroupPipe } from '@shared/pipes/tradeline-to-accountgroup/tradeline-to-accountgroup.pipe';
import { Helper } from '@testing/test-helper';
import { ForbearanceViewModel } from '@views/dashboard/forbearance/forbearance.model';
import { ForbearanceService } from '@views/dashboard/forbearance/forbearance.service';
import { BehaviorSubject } from 'rxjs';

import { ForbearancePureView } from './forbearance-pure.view';

describe('ForbearancePureView', () => {
  let component: ForbearancePureView;
  let fixture: ComponentFixture<ForbearancePureView>;
  let h: Helper<ForbearancePureView>;
  let forbearanceServiceMock: any;
  forbearanceServiceMock = jasmine.createSpyObj('ForbearanceService', ['onViewDetail'], {
    model$: new BehaviorSubject({ tradelines: [] }),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForbearancePureView, TradelineToAccountgroupPipe],
      providers: [{ provide: ForbearanceService, useValue: forbearanceServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearancePureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h = new Helper(component);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties and Methods', () => {
    it('should have a property named "groups"', () => {
      expect(h.hasProperty(component, 'groups')).toEqual(true);
    });
    it('should have a property named "model"', () => {
      expect(h.hasProperty(component, 'model')).toEqual(true);
    });
    it('should have a property named "serviceSub$"', () => {
      expect(h.hasProperty(component, 'serviceSub$')).toEqual(true);
    });
  });

  it('should call serviceSub$.unsubscribe on ngOnDestroy', () => {
    const spy = spyOn(component.serviceSub$, 'unsubscribe');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });

  describe('Ctor initialization', () => {
    it('should subscribe to the service model$ which sets the component model', () => {
      const mock = { tradelines: ['abc'] } as any;
      forbearanceServiceMock.model$.next(mock);
      expect(component.model).toEqual(mock);
    });
  });
});
