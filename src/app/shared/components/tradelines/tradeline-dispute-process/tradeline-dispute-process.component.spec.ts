import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineDisputeProcessComponent } from './tradeline-dispute-process.component';

describe('TradelineDisputeProcessComponent', () => {
  let component: TradelineDisputeProcessComponent;
  let fixture: ComponentFixture<TradelineDisputeProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDisputeProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDisputeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
