import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProgressTrackerPureComponent } from "./progress-tracker-pure.component";
import { IProgressTrackerView } from "../progress-tracker.model";
import { BehaviorSubject } from "rxjs";
import { ProgressTrackerViewService } from "../progress-tracker-view.service";

describe("ProgressTrackerPureComponent", () => {
  let component: ProgressTrackerPureComponent;
  let fixture: ComponentFixture<ProgressTrackerPureComponent>;

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
    await TestBed.configureTestingModule({
      declarations: [ProgressTrackerPureComponent],
      providers: [
        {
          provide: ProgressTrackerViewService,
          useValue: progressTrackerViewServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrackerPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
