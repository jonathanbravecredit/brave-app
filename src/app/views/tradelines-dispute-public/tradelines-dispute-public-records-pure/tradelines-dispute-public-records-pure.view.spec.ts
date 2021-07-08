import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinesDisputePublicRecordsPureView } from './tradelines-dispute-public-records-pure.view';

describe('TradelinesDisputePublicRecordsPureView', () => {
  let component: TradelinesDisputePublicRecordsPureView;
  let fixture: ComponentFixture<TradelinesDisputePublicRecordsPureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinesDisputePublicRecordsPureView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesDisputePublicRecordsPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
