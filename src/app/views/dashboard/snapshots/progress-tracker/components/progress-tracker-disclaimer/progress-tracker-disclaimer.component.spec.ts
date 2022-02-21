import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTrackerDisclaimerComponent } from './progress-tracker-disclaimer.component';

describe('ProgressTrackerDisclaimerComponent', () => {
  let component: ProgressTrackerDisclaimerComponent;
  let fixture: ComponentFixture<ProgressTrackerDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressTrackerDisclaimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
