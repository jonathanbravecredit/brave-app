import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsPureView } from './dispute-findings-pure.view';

describe('DisputeFindingsPureView', () => {
  let component: DisputeFindingsPureView;
  let fixture: ComponentFixture<DisputeFindingsPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
