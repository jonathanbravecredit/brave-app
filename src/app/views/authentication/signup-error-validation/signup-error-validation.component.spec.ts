import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseModalSmallComponent } from '@shared/components/modals/base-modal-small/base-modal-small.component';

import { SignupErrorValidationComponent } from './signup-error-validation.component';

describe('SignupErrorValidationComponent', () => {
  let component: SignupErrorValidationComponent;
  let fixture: ComponentFixture<SignupErrorValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupErrorValidationComponent, BaseModalSmallComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupErrorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run initiateModal on initilization', () => {
    spyOn(component, 'initiateModal');
    component.ngOnInit();
    expect(component.initiateModal).toHaveBeenCalled();
  });

  it('should set modal.showmodal to showModal if this.modal on initiateModal', () => {
    component.modal = {showModal: false} as BaseModalSmallComponent
    component.initiateModal(true)
    expect(component.modal?.showModal).toBeTrue()
  })

  it('should set modal.showmodal to !modal.showmodal if this.modal on toggleShowModal', () => {
    component.modal = {showModal: false} as BaseModalSmallComponent
    component.toggleShowModal()
    expect(component.modal?.showModal).toBeTrue()
  })
});
