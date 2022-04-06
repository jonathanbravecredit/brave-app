import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixSubHeadersComponent } from './credit-mix-sub-headers.component';

describe('CreditMixSubHeadersComponent', () => {
  let component: CreditMixSubHeadersComponent;
  let fixture: ComponentFixture<CreditMixSubHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditMixSubHeadersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixSubHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showmodal to opposite on toggleShowModal', () => {
    component.showModal = true;
    component.toggleShowModal();
    expect(component.showModal).toBeFalse();
  });
});
