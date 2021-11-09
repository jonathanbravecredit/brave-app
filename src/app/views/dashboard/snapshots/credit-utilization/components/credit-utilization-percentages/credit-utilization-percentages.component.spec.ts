import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUtilizationPercentagesComponent } from './credit-utilization-percentages.component';

describe('CreditUtilizationPercentagesComponent', () => {
  let component: CreditUtilizationPercentagesComponent;
  let fixture: ComponentFixture<CreditUtilizationPercentagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditUtilizationPercentagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationPercentagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
