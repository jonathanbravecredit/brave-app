import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUtilizationView } from './credit-utilization.view';

describe('CreditUtilizationView', () => {
  let component: CreditUtilizationView;
  let fixture: ComponentFixture<CreditUtilizationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditUtilizationView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUtilizationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
