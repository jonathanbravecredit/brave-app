import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsResultsComponent } from './dispute-findings-results.component';

describe('DisputeFindingsResultsComponent', () => {
  let component: DisputeFindingsResultsComponent;
  let fixture: ComponentFixture<DisputeFindingsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
