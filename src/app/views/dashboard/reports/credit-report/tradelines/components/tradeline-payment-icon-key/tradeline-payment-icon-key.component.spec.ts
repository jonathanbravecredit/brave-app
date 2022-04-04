import { TradelinePaymentIconKeyComponent } from './tradeline-payment-icon-key.component';

const setup = () => {
  const modalServiceMock = jasmine.createSpyObj('ModalService', ['removeModalFromBody']);

  const component = new TradelinePaymentIconKeyComponent(modalServiceMock);

  return { component, modalServiceMock };
};

describe('TradelinePaymentIconKeyComponent', () => {
  const { component, modalServiceMock } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run modalService.removeModalFromBody when closeModal is called', () => {
    component.closeModal();

    expect(modalServiceMock.removeModalFromBody).toHaveBeenCalled();
  });
});
