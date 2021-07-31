import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycIdverificationPureComponent } from './kyc-idverification-pure.component';

describe('KycIdverificationPureComponent', () => {
  let component: KycIdverificationPureComponent;
  let fixture: ComponentFixture<KycIdverificationPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycIdverificationPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycIdverificationPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
