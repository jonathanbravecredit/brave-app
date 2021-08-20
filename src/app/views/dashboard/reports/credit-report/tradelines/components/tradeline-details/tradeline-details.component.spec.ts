import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineDetailsComponent } from './tradeline-details.component';

describe('TradelineDetailsComponent', () => {
  let component: TradelineDetailsComponent;
  let fixture: ComponentFixture<TradelineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
