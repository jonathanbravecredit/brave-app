import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureScoreCardComponent } from './future-score-card.component';

describe('FutureScoreCardComponent', () => {
  let component: FutureScoreCardComponent;
  let fixture: ComponentFixture<FutureScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FutureScoreCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run calculatePointsDiff on init', () => {
    spyOn(component, 'calculatePointsDiff');
    component.ngOnInit();
    expect(component.calculatePointsDiff).toHaveBeenCalled();
  });

  it('should run getScoreReview on init', () => {
    spyOn(component, 'getScoreReview');
    component.ngOnInit();
    expect(component.getScoreReview).toHaveBeenCalled();
  });

  it('should set pointsDiff to futureScore - enrolledScore if enrolledScore on calculatePointsDiff', () => {
    component.enrolledScore = '10';
    component.futureScore = 20;
    component.calculatePointsDiff();
    expect(component.pointsDiff).toEqual(10);
  });

  it('should return the proper string if future score is 499 on getScoreReview', () => {
    component.futureScore = 499;
    let res = component.getScoreReview();
    expect(res).toEqual('Very Poor');
  });

  it('should return the proper string if future score is 599 on getScoreReview', () => {
    component.futureScore = 599;
    let res = component.getScoreReview();
    expect(res).toEqual('Poor');
  });

  it('should return the proper string if future score is 659 on getScoreReview', () => {
    component.futureScore = 659;
    let res = component.getScoreReview();
    expect(res).toEqual('Fair');
  });

  it('should return the proper string if future score is 779 on getScoreReview', () => {
    component.futureScore = 779;
    let res = component.getScoreReview();
    expect(res).toEqual('Good');
  });

  it('should return the proper string if future score is 781 on getScoreReview', () => {
    component.futureScore = 781;
    let res = component.getScoreReview();
    expect(res).toEqual('Excellent');
  });
});
