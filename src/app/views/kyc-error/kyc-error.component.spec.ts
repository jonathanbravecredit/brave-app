import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycErrorComponent } from './kyc-error.component';

describe('KycErrorComponent', () => {
  let component: KycErrorComponent;
  let fixture: ComponentFixture<KycErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
