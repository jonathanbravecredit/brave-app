import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradelinesDisputePublicRecordsView } from './tradelines-dispute-public-records.view';

describe('TradelinesDisputePublicRecordsView', () => {
  let component: TradelinesDisputePublicRecordsView;
  let fixture: ComponentFixture<TradelinesDisputePublicRecordsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradelinesDisputePublicRecordsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesDisputePublicRecordsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
