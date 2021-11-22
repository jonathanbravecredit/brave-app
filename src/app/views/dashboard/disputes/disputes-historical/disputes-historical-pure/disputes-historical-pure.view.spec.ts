import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesHistoricalPureView } from './disputes-historical-pure.view';

describe('DisputesHistoricalPureView', () => {
  let component: DisputesHistoricalPureView;
  let fixture: ComponentFixture<DisputesHistoricalPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesHistoricalPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesHistoricalPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
