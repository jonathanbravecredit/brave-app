import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { Initiative } from '@shared/interfaces/progress-tracker.interface';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { ProgressTrackerService } from '@shared/services/progress-tracker/progress-tracker-service.service';
import { of } from 'rxjs';

import { ProgressTrackerComponent } from './progress-tracker.component';

describe('ProgressTrackerComponent', () => {
  let component: ProgressTrackerComponent;
  let fixture: ComponentFixture<ProgressTrackerComponent>;
  let progressTrackerMock: any;
  let storeMock: any;

  beforeEach(async () => {
    progressTrackerMock = jasmine.createSpyObj('ProgressTrackerService', ['findFutureScore']);
    storeMock = jasmine.createSpyObj('Store', ['selectSnapshot']);

    await TestBed.configureTestingModule({
      declarations: [ProgressTrackerComponent],
      providers: [
        { provide: ProgressTrackerService, useValue: progressTrackerMock },
        { provide: Store, useValue: storeMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run setCurrentInitiativeTasks on init', () => {
    const spy = spyOn(component, 'setCurrentInitiativeTasks');

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should set futureScore to 0 if FindFutureScore and enrolledScore are falsy', () => {
    progressTrackerMock.findFutureScore.and.returnValue(undefined);

    Object.defineProperties(component, {enrolledScore: {value: undefined}})

    component.ngOnInit();

    expect(component.futureScore).toEqual(0);
  });

  it('should set futureScore to 123 if FindFutureScore returns 123 and enrolledScore is falsy', () => {
    progressTrackerMock.findFutureScore.and.returnValue(123);

    Object.defineProperties(component, {enrolledScore: {value: undefined}})

    component.ngOnInit();

    expect(component.futureScore).toEqual(123);
  });

  it('should set futureScore to 50 if FindFutureScore returns 25 and enrolledScore is 25', () => {
    progressTrackerMock.findFutureScore.and.returnValue(25);

    Object.defineProperties(component, {enrolledScore: {value: '25'}})

    component.ngOnInit();

    expect(component.futureScore).toEqual(50);
  });

  it('should set initiativeTasks to [] if initiative is falsy', () => {
    component.initiative = null;

    component.setCurrentInitiativeTasks();

    expect(component.initiativeTasks).toEqual([]);
  });

  it('should set initiative to the initiative in the progresstackerservice', () => {
    const testInitiative = { id: 'test' } as Initiative;

    progressTrackerMock.initiative = testInitiative;

    fixture = TestBed.createComponent(ProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.initiative).toEqual(testInitiative);
  });
});
