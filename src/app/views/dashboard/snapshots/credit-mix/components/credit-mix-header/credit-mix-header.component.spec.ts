import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixHeaderComponent } from './credit-mix-header.component';

describe('CreditMixHeaderComponent', () => {
  let component: CreditMixHeaderComponent;
  let fixture: ComponentFixture<CreditMixHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
