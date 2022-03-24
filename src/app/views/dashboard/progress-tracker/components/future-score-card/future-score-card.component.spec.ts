import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureScoreCardComponent } from './future-score-card.component';

describe('FutureScoreCardComponent', () => {
  let component: FutureScoreCardComponent;
  let fixture: ComponentFixture<FutureScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureScoreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
