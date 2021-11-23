import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixComponent } from './credit-mix.component';

describe('CreditMixComponent', () => {
  let component: CreditMixComponent;
  let fixture: ComponentFixture<CreditMixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
