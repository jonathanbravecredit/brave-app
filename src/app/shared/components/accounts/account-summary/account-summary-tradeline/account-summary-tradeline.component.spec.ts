import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecodePipe } from '@shared/pipes/decode/decode.pipe';

import { AccountSummaryTradelineComponent } from './account-summary-tradeline.component';

//private modalService: ModalService

const setup = () => {
  const ModalServiceMock = jasmine.createSpyObj('ModalService', ['appendModalToBody']);

  const component = new AccountSummaryTradelineComponent(
    ModalServiceMock
  );

  return { component, ModalServiceMock };
};

describe('AccountSummaryTradelineComponent', () => {

    const { component, ModalServiceMock } = setup();

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should run modalService.appendModalToBody when openModal is called', () => {
    component.openModal()

    expect(ModalServiceMock.appendModalToBody).toHaveBeenCalled()
  })
});
