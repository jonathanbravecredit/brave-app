import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseModalSmallComponent } from '@shared/components/modals/base-modal-small/base-modal-small.component';

import { KycErrorValidationComponent } from './kyc-error-validation.component';

describe('KycErrorValidationComponent', () => {
  let component: KycErrorValidationComponent;
  let fixture: ComponentFixture<KycErrorValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KycErrorValidationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycErrorValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run initiateModal on init', () => {
    spyOn(component, 'initiateModal');

    component.ngOnInit();

    expect(component.initiateModal).toHaveBeenCalled();
  });

  it('should set showModal to the passed in boolean when initiateModal is called', () => {
    component.modal = {} as BaseModalSmallComponent;

    component.initiateModal(true);

    expect(component.modal.showModal).toEqual(true);
  });

  it('should flip showModal boolean when toggleShowModal is called', () => {
    component.modal = {} as BaseModalSmallComponent;

    component.modal.showModal = true;

    component.toggleShowModal();

    expect(component.modal.showModal).toEqual(false);
  });
});
