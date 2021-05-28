import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
