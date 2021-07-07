import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineDisputeProcessSuccessComponent } from './tradeline-dispute-process-success.component';

describe('TradelineDisputeProcessSuccessComponent', () => {
  let component: TradelineDisputeProcessSuccessComponent;
  let fixture: ComponentFixture<TradelineDisputeProcessSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDisputeProcessSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDisputeProcessSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
