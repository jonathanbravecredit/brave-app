import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradelineDisputePublicRecordsView } from './tradline-dispute-public-records.view';

describe('TradelineDisputePublicRecordsView', () => {
  let component: TradelineDisputePublicRecordsView;
  let fixture: ComponentFixture<TradelineDisputePublicRecordsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDisputePublicRecordsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDisputePublicRecordsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
