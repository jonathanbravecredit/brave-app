import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesTradelineView } from './disputes-tradeline.view';

describe('DisputesTradelineView', () => {
  let component: DisputesTradelineView;
  let fixture: ComponentFixture<DisputesTradelineView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesTradelineView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesTradelineView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
