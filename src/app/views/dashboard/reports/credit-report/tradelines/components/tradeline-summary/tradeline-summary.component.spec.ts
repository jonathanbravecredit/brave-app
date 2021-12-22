import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnapshotStatusPipe } from '@shared/components/cards/snapshot-display-card/snapshot-status.pipe';
import { DecodePipe } from '@shared/pipes/decode/decode.pipe';

import { TradelineSummaryComponent } from './tradeline-summary.component';

describe('TradelineSummaryComponent', () => {
  let component: TradelineSummaryComponent;
  let fixture: ComponentFixture<TradelineSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineSummaryComponent, SnapshotStatusPipe, DecodePipe ]
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
