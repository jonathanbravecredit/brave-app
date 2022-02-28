import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkifyPipe } from '@shared/pipes/linkify/linkify.pipe';

import { ProgressTrackerHeaderComponent } from './progress-tracker-header.component';

describe('ProgressTrackerHeaderComponent', () => {
  let component: ProgressTrackerHeaderComponent;
  let fixture: ComponentFixture<ProgressTrackerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressTrackerHeaderComponent, LinkifyPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
