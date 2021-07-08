import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradelineDisputePublicRecordsComponent } from './tradeline-dispute-public-records.component';

describe('TradelineDisputePublicRecordsComponent', () => {
  let component: TradelineDisputePublicRecordsComponent;
  let fixture: ComponentFixture<TradelineDisputePublicRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDisputePublicRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDisputePublicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
