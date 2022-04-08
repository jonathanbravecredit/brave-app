import { CreditUtilizationColorPercentComponent } from '@views/dashboard/credit-utilization/components/credit-utilization-color-percent/credit-utilization-color-percent.component';

const setup = () => {
  const Mock = jasmine.createSpyObj('', ['']);

  const component = new CreditUtilizationColorPercentComponent();

  return { component, Mock };
};

describe('CreditUtilizationColorPercentComponent', () => {
  const { component } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run calculateColor on init', () => {
    spyOn(component, 'calculateColor');
    component.ngOnInit();
    expect(component.calculateColor).toHaveBeenCalled();
  });

  it('should return "#4BD269" on calculateColor and percent is 8', () => {
    let res = component.calculateColor(8);
    expect(res).toEqual('#4BD269');
  });

  it('should return "#BBD904" on calculateColor and percent is 28', () => {
    let res = component.calculateColor(28);
    expect(res).toEqual('#BBD904');
  });

  it('should return "#F59300" on calculateColor and percent is 48', () => {
    let res = component.calculateColor(48);
    expect(res).toEqual('#F59300');
  });

  it('should return "#F56700" on calculateColor and percent is 73', () => {
    let res = component.calculateColor(73);
    expect(res).toEqual('#F56700');
  });

  it('should return "#E93C25" on calculateColor and percent is 75', () => {
    let res = component.calculateColor(75);
    expect(res).toEqual('#E93C25');
  });
});
