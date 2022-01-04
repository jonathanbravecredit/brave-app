import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindingsTransformerPipe } from '@shared/pipes/findingsTransformer/findings-transformer.pipe';

import { DisputeFindingsPureView } from './dispute-findings-pure.view';

describe('DisputeFindingsPureView', () => {
  let component: DisputeFindingsPureView;
  let fixture: ComponentFixture<DisputeFindingsPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsPureView, FindingsTransformerPipe ]
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
