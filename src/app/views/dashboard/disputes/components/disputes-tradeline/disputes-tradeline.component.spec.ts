import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesTradelineComponent } from './disputes-tradeline.component';

describe('DisputesTradelineComponent', () => {
  let component: DisputesTradelineComponent;
  let fixture: ComponentFixture<DisputesTradelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesTradelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesTradelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
