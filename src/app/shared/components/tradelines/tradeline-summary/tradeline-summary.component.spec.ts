import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineSummaryComponent } from './tradeline-summary.component';

describe('TradelineSummaryComponent', () => {
  let component: TradelineSummaryComponent;
  let fixture: ComponentFixture<TradelineSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
