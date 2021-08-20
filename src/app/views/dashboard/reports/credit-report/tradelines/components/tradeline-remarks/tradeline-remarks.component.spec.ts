import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelineRemarksComponent } from './tradeline-remarks.component';

describe('TradelineRemarksComponent', () => {
  let component: TradelineRemarksComponent;
  let fixture: ComponentFixture<TradelineRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelineRemarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
