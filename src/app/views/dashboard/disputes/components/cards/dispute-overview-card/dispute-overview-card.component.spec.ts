import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeOverviewCardComponent } from './dispute-overview-card.component';

describe('DisputeOverviewCardComponent', () => {
  let component: DisputeOverviewCardComponent;
  let fixture: ComponentFixture<DisputeOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeOverviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
