import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradelineToFindingsPipe } from '@shared/pipes/tradeline-to-findings/tradeline-to-findings.pipe';

import { DisputeFindingsTradelineDetailsComponent } from './dispute-findings-tradeline-details.component';

describe('DisputeFindingsTradelineDetailsComponent', () => {
  let component: DisputeFindingsTradelineDetailsComponent;
  let fixture: ComponentFixture<DisputeFindingsTradelineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsTradelineDetailsComponent, TradelineToFindingsPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsTradelineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
