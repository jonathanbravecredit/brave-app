import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTrackerPureComponent } from './progress-tracker-pure.component';

describe('ProgressTrackerPureComponent', () => {
  let component: ProgressTrackerPureComponent;
  let fixture: ComponentFixture<ProgressTrackerPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressTrackerPureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
