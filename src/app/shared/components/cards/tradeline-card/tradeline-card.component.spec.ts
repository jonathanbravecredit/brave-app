import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineCardComponent } from './tradeline-card.component';

describe('TradelineCardComponent', () => {
  let component: TradelineCardComponent;
  let fixture: ComponentFixture<TradelineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
