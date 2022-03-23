import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesHeaderTradelineComponent } from './disputes-header-tradeline.component';

describe('DisputesHeaderTradelineComponent', () => {
  let component: DisputesHeaderTradelineComponent;
  let fixture: ComponentFixture<DisputesHeaderTradelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesHeaderTradelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesHeaderTradelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
