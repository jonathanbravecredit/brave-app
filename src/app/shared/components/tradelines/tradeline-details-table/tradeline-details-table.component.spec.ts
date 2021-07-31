import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineDetailsTableComponent } from './tradeline-details-table.component';

describe('TradelineDetailsTableComponent', () => {
  let component: TradelineDetailsTableComponent;
  let fixture: ComponentFixture<TradelineDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDetailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
