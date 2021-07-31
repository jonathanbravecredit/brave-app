import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsResultsDetailsComponent } from './dispute-findings-results-details.component';

describe('DisputeFindingsResultsDetailsComponent', () => {
  let component: DisputeFindingsResultsDetailsComponent;
  let fixture: ComponentFixture<DisputeFindingsResultsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsResultsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsResultsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
