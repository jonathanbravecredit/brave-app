import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import {
  InitiativePatchBody,
  InitiativeSubTask,
} from "@shared/interfaces/progress-tracker.interface";
import { ProgressTrackerGoalCardComponent } from "./progress-tracker-goal-card.component";
import { IProgressTrackerView } from "../../progress-tracker.model";
import { BehaviorSubject } from "rxjs";
import { ProgressTrackerViewService } from "../../progress-tracker-view.service";
import { LinkifyPipe } from "../../../../../shared/pipes/linkify/linkify.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ProgressTrackerGoalCardComponent", () => {
  let component: ProgressTrackerGoalCardComponent;
  let fixture: ComponentFixture<ProgressTrackerGoalCardComponent>;
  let routerMock: any;

  let progressTrackerViewServiceMock: any;

  beforeEach(async () => {
    progressTrackerViewServiceMock = jasmine.createSpyObj(
      "ProgressTrackerViewService",
      ["getMetric", "updateProgressTrackerData"],
      {
        model$: new BehaviorSubject<IProgressTrackerView>(
          {} as IProgressTrackerView
        ),
      }
    );
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    await TestBed.configureTestingModule({
      declarations: [ProgressTrackerGoalCardComponent, LinkifyPipe],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        {
          provide: ProgressTrackerViewService,
          useValue: progressTrackerViewServiceMock,
        },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerGoalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set patchBody properly on init", () => {
    component.subTask = {
      parentId: "test 1",
      taskId: "test 2",
      taskStatus: "test 3",
    } as InitiativeSubTask;

    component.ngOnInit();

    expect(component.patchBody).toEqual({
      parentId: "test 1",
      taskId: "test 2",
      taskStatus: "test 3",
    } as InitiativePatchBody);
  });
});
