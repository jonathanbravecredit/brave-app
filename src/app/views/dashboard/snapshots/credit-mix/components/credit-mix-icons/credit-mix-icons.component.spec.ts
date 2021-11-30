import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMixIconsComponent } from './credit-mix-icons.component';

describe('CreditMixIconsComponent', () => {
  let component: CreditMixIconsComponent;
  let fixture: ComponentFixture<CreditMixIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMixIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
