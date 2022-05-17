import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FutureScoreCardComponent } from "./future-score-card.component";
import { BehaviorSubject } from "rxjs";
import { ProgressTrackerViewService } from "../../progress-tracker-view.service";
import { IProgressTrackerView } from "../../progress-tracker.model";

describe("FutureScoreCardComponent", () => {
  let component: FutureScoreCardComponent;
  let fixture: ComponentFixture<FutureScoreCardComponent>;
  let progressTrackerViewServiceMock: any;

  beforeEach(async () => {
    progressTrackerViewServiceMock = jasmine.createSpyObj(
      "ProgressTrackerViewService",
      [""],
      {
        model$: new BehaviorSubject<IProgressTrackerView>(
          {} as IProgressTrackerView
        ),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [FutureScoreCardComponent],
      providers: [
        {
          provide: ProgressTrackerViewService,
          useValue: progressTrackerViewServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
