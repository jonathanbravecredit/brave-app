import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineDisputeCardComponent } from './tradeline-dispute-card.component';

describe('TradelineDisputeCardComponent', () => {
  let component: TradelineDisputeCardComponent;
  let fixture: ComponentFixture<TradelineDisputeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDisputeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDisputeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
