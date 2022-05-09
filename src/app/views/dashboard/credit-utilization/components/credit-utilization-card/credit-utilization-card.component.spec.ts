import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetails/viewdetail-button/viewdetail-button.component';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { CreditUtilizationCardComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-card/credit-utilization-card.component';
import { Subject } from 'rxjs';

const setup = () => {
  const Mock = jasmine.createSpyObj('', ['']);

  const component = new CreditUtilizationCardComponent();

  return { component, Mock };
};

describe('CreditUtilizationCardComponent', () => {
  const { component } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run calculatePercentageUtilization on init', () => {
    spyOn(component, 'calculatePercentageUtilization');
    component.ngOnInit();
    expect(component.calculatePercentageUtilization).toHaveBeenCalled();
  });

  it('should run calculateCreditStatus on init', () => {
    spyOn(component, 'calculateCreditStatus');
    component.ngOnInit();
    expect(component.calculateCreditStatus).toHaveBeenCalled();
  });

  it('should run viewDetail.open$.asObservable on AfterViewInit if viewDetail is truthy', () => {
    component.viewDetail = {open$: new Subject<boolean>()} as ViewdetailButtonComponent;
    let spy = spyOn(component.viewDetail.open$, 'asObservable');
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should run calculateCreditStatus on init', () => {
    spyOn(component, 'calculateCreditStatus');
    component.ngOnInit();
    expect(component.calculateCreditStatus).toHaveBeenCalled();
  });

  it('should return undefined on calculatePercentageUtilization if both arguments are undefined', () => {
    let res = component.calculatePercentageUtilization(undefined, undefined);
    expect(res).toBeUndefined();
  });

  it('should return TransunionUtil.bcMissing on calculatePercentageUtilization if open is falsy and card limit is 0', () => {
    component.open = false;
    let res = component.calculatePercentageUtilization('', 0);
    expect(res).toEqual(TransunionUtil.bcMissing);
  });

  it('should return <1 on calculatePercentageUtilization if currentBalence 0.01 and creditLimit is 2', () => {
    component.open = true;
    let res = component.calculatePercentageUtilization(0.01, 2);
    expect(res).toEqual('<1');
  });

  it('should return 200 on calculatePercentageUtilization if currentBalence 4 and creditLimit is 2', () => {
    component.open = true;
    let res = component.calculatePercentageUtilization(4, 2);
    expect(res).toEqual(200);
  });

  it('should return "closed" on calculateCreditStatus if open is falsy', () => {
    component.open = false;
    let res = component.calculateCreditStatus('');
    expect(res).toEqual("closed");
  });

  it('should return "closed" on calculateCreditStatus if argument is undefined', () => {
    component.open = true;
    let res = component.calculateCreditStatus(undefined);
    expect(res).toEqual("closed");
  });

  it('should return "excellent" on calculateCreditStatus if argument is <1', () => {
    component.open = true;
    let res = component.calculateCreditStatus('<1');
    expect(res).toEqual("excellent");
  });

  it('should return "excellent" on calculateCreditStatus if argument is 8', () => {
    component.open = true;
    let res = component.calculateCreditStatus(8);
    expect(res).toEqual("excellent");
  });

  it('should return "good" on calculateCreditStatus if argument is 28', () => {
    component.open = true;
    let res = component.calculateCreditStatus(28);
    expect(res).toEqual("good");
  });

  it('should return "fair" on calculateCreditStatus if argument is 48', () => {
    component.open = true;
    let res = component.calculateCreditStatus(48);
    expect(res).toEqual("fair");
  });

  it('should return "poor" on calculateCreditStatus if argument is 73', () => {
    component.open = true;
    let res = component.calculateCreditStatus(73);
    expect(res).toEqual("poor");
  });

  it('should return "verypoor" on calculateCreditStatus if argument is 75', () => {
    component.open = true;
    let res = component.calculateCreditStatus(75);
    expect(res).toEqual("verypoor");
  });
});
