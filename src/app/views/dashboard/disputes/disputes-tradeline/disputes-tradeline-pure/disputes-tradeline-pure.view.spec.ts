import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesTradelinePureView } from './disputes-tradeline-pure.view';

describe('DisputesTradelinePureView', () => {
  let component: DisputesTradelinePureView;
  let fixture: ComponentFixture<DisputesTradelinePureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesTradelinePureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesTradelinePureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
