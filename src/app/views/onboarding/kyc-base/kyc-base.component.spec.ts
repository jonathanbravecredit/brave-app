import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { KycBaseComponent } from './kyc-base.component';

describe('KycBaseComponent', () => {
  let component: KycBaseComponent;
  let fixture: ComponentFixture<KycBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have canDeactivate return true if form valid and touched are false', () => {
    expect(component.canDeactivate({valid: false, touched: false} as FormGroup)).toEqual(true)
  })

  it('should have canDeactivate return true if form valid and touched are true', () => {
    expect(component.canDeactivate({valid: true, touched: true} as FormGroup)).toEqual(true)
  })

  it('should call flattenAttributes when formatAttributes is called', () => {
    spyOn(component, 'flattenAttributes')

    component.formatAttributes({value: []} as FormGroup, {})

    expect(component.flattenAttributes).toHaveBeenCalled()
  })
});
