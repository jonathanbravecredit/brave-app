import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditScoreGraphicTabsComponent } from './credit-score-graphic-tabs.component';

describe('CreditScoreGraphicTabsComponent', () => {
  let component: CreditScoreGraphicTabsComponent;
  let fixture: ComponentFixture<CreditScoreGraphicTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditScoreGraphicTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditScoreGraphicTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
