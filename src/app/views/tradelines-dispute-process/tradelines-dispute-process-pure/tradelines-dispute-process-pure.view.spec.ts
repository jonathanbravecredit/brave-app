import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinesDisputeProcessPureView } from './tradelines-dispute-process-pure.view';

describe('TradelinesDisputeProcessPureView', () => {
  let component: TradelinesDisputeProcessPureView;
  let fixture: ComponentFixture<TradelinesDisputeProcessPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinesDisputeProcessPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesDisputeProcessPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
