import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeFindingsRatingKeyComponent } from './dispute-findings-rating-key.component';

describe('DisputeFindingsRatingKeyComponent', () => {
  let component: DisputeFindingsRatingKeyComponent;
  let fixture: ComponentFixture<DisputeFindingsRatingKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeFindingsRatingKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsRatingKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
