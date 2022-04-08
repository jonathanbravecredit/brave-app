import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ITradeLinePartition } from '@shared/interfaces';
import { of } from 'rxjs';

import { CreditUtilizationView } from './credit-utilization.view';

describe('CreditUtilizationView', () => {
  let component: CreditUtilizationView;
  let fixture: ComponentFixture<CreditUtilizationView>;
  let routeMock: any;

  beforeEach(async () => {
    routeMock = jasmine.createSpyObj('ActivatedRoute', [''], { data: of() });
    await TestBed.configureTestingModule({
      declarations: [CreditUtilizationView],
      providers: [{ provide: ActivatedRoute, useValue: routeMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run sumDebtAmount on init', () => {
    spyOn(component, 'sumDebtAmount');
    component.ngOnInit();
    expect(component.sumDebtAmount).toHaveBeenCalled();
  });

  it('should run sumTotalAmount on init', () => {
    spyOn(component, 'sumTotalAmount');
    component.ngOnInit();
    expect(component.sumTotalAmount).toHaveBeenCalled();
  });

  it('should run calcUtilzationPerc on init', () => {
    spyOn(component, 'calcUtilzationPerc');
    component.ngOnInit();
    expect(component.calcUtilzationPerc).toHaveBeenCalled();
  });

  it('should set hasCards to true if creditReports.length on init', () => {
    component.creditReports = [{} as ITradeLinePartition];
    component.ngOnInit();
    expect(component.hasCards).toBeTrue();
  });

  it('should return 0 if total is 0 on calcUtilzationPerc', () => {
    let res = component.calcUtilzationPerc(0, 0)
    expect(res).toEqual(0)
  })

  it('should return 200 if debt is 4 and total is 2 on calcUtilzationPerc', () => {
    let res = component.calcUtilzationPerc(4, 2)
    expect(res).toEqual(200)
  })
});
