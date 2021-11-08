import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUtilizationTotalComponent } from './credit-utilization-total.component';

describe('CreditUtilizationTotalComponent', () => {
  let component: CreditUtilizationTotalComponent;
  let fixture: ComponentFixture<CreditUtilizationTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditUtilizationTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
