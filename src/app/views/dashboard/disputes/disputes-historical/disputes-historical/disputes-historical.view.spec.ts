import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesHistoricalView } from './disputes-historical.view';

describe('DisputesHistoricalView', () => {
  let component: DisputesHistoricalView;
  let fixture: ComponentFixture<DisputesHistoricalView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesHistoricalView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesHistoricalView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
