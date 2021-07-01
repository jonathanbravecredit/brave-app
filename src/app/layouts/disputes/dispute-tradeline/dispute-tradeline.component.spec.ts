import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeTradelineComponent } from './dispute-tradeline.component';

describe('DisputeTradelineComponent', () => {
  let component: DisputeTradelineComponent;
  let fixture: ComponentFixture<DisputeTradelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeTradelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeTradelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
