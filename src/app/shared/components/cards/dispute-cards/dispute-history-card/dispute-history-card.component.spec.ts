import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeHistoryCardComponent } from './dispute-history-card.component';

describe('DisputeHistoryCardComponent', () => {
  let component: DisputeHistoryCardComponent;
  let fixture: ComponentFixture<DisputeHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeHistoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
