import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinesDisputeProcessView } from './tradelines-dispute-process.view';

describe('TradelinesDisputeProcessView', () => {
  let component: TradelinesDisputeProcessView;
  let fixture: ComponentFixture<TradelinesDisputeProcessView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinesDisputeProcessView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesDisputeProcessView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
