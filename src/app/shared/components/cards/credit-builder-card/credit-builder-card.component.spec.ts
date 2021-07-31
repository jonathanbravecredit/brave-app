import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditBuilderCardComponent } from './credit-builder-card.component';

describe('CreditBuilderCardComponent', () => {
  let component: CreditBuilderCardComponent;
  let fixture: ComponentFixture<CreditBuilderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditBuilderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditBuilderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
