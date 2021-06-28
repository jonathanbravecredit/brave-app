import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineDetailRowComponent } from './tradeline-detail-row.component';

describe('TradelineDetailRowComponent', () => {
  let component: TradelineDetailRowComponent;
  let fixture: ComponentFixture<TradelineDetailRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDetailRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDetailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
