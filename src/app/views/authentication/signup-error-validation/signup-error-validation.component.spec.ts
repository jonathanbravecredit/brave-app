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

  // it('', () => {
  //   spyOn(component, 'initiateModal');
  //   component.initiateModal(false);
  //   expect(component.modal?.showModal).toEqual(false);  //TODO FIND OUT WHY THIS IS BREAKING OTHER FILES
  // });
});
