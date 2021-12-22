import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecodePipe } from '@shared/pipes/decode/decode.pipe';

import { DisputeHeaderTradelineComponent } from './dispute-header-tradeline.component';

describe('DisputeHeaderTradelineComponent', () => {
  let component: DisputeHeaderTradelineComponent;
  let fixture: ComponentFixture<DisputeHeaderTradelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeHeaderTradelineComponent, DecodePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeHeaderTradelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
