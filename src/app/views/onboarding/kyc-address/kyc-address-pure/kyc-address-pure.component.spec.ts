import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycAddressPureComponent } from './kyc-address-pure.component';

describe('KycAddressPureComponent', () => {
  let component: KycAddressPureComponent;
  let fixture: ComponentFixture<KycAddressPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycAddressPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycAddressPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
