import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycSsnFullPureComponent } from './kyc-ssn-full-pure.component';

describe('KycSsnFullPureComponent', () => {
  let component: KycSsnFullPureComponent;
  let fixture: ComponentFixture<KycSsnFullPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycSsnFullPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycSsnFullPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
