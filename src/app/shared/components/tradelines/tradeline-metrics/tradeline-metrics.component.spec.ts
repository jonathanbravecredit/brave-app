import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineMetricsComponent } from './tradeline-metrics.component';

describe('TradelineMetricsComponent', () => {
  let component: TradelineMetricsComponent;
  let fixture: ComponentFixture<TradelineMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
