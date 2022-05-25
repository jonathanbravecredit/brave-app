import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Helper } from '@testing/test-helper';
import { ForbearanceService } from '@views/dashboard/forbearance/forbearance.service';
import { ForbearanceAccountsComponent } from './forbearance-accounts.component';

describe('ForbearanceAccountsComponent', () => {
  let component: ForbearanceAccountsComponent;
  let fixture: ComponentFixture<ForbearanceAccountsComponent>;
  let forbearanceServiceMock: any;
  let h: Helper<ForbearanceAccountsComponent>;

  beforeEach(async () => {
    forbearanceServiceMock = jasmine.createSpyObj('ForbearanceService', ['onViewDetail']);
    await TestBed.configureTestingModule({
      declarations: [ForbearanceAccountsComponent],
      providers: [{ provide: ForbearanceService, useValue: forbearanceServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h = new Helper(component);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Properties and Methods', () => {
    it('should have a property called "tradelines"', () => {
      expect(h.hasProperty(component, 'tradelines')).toEqual(true);
    });
    it('should have a property called "viewType"', () => {
      expect(h.hasProperty(component, 'viewType')).toEqual(true);
    });
    it('should have a property called "viewDetailOrientation"', () => {
      expect(h.hasProperty(component, 'viewDetailOrientation')).toEqual(true);
    });
    it('should have a property called "content"', () => {
      expect(h.hasProperty(component, 'content')).toEqual(true);
    });
    it('should have a method called "onViewDetail"', () => {
      expect(h.hasMethod(component, 'onViewDetail')).toEqual(true);
    });
  });

  describe('onViewDetail method', () => {
    it('should NOT call service.onViewDetail if tradeline not provided', () => {
      component.onViewDetail(undefined);
      expect(forbearanceServiceMock.onViewDetail).not.toHaveBeenCalled();
    });
    it('should call service.onViewDetail if tradeline is provided', () => {
      component.onViewDetail('mocktradeline' as any);
      expect(forbearanceServiceMock.onViewDetail).toHaveBeenCalledWith('mocktradeline');
    });
  });
});
