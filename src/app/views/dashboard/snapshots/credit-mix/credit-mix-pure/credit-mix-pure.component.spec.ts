import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixPureComponent } from './credit-mix-pure.component';

describe('CreditMixPureComponent', () => {
  let component: CreditMixPureComponent;
  let fixture: ComponentFixture<CreditMixPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
