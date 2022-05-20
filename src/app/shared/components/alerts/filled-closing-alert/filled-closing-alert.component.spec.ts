import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { FilledClosingAlertComponent } from "./filled-closing-alert.component";
import { BroadcastService } from "../../../services/broadcast/broadcast.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("AccountSummaryPersonalitemComponent", () => {
  let component: FilledClosingAlertComponent;
  let fixture: ComponentFixture<FilledClosingAlertComponent>;
  let broadcasterMock: any;

  beforeEach(async () => {
    broadcasterMock = jasmine.createSpyObj("BroadcastService", ["broadcast"]);
    await TestBed.configureTestingModule({
      declarations: [FilledClosingAlertComponent],
      imports: [BrowserAnimationsModule],
      providers: [
        {
          provide: BroadcastService,
          useValue: broadcasterMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledClosingAlertComponent);
    component = fixture.componentInstance;
    spyOn(component.closeClicked, "emit");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should run closeClicked.emit if timed is true", fakeAsync(() => {
    component.timed = true;
    component.timeout = 1;
    component.ngOnInit();
    tick(5000);
    expect(component.closeClicked.emit).toHaveBeenCalled();
  }));

  it("should run broadcast on closeClick", () => {
    component.closeClick();
    expect(broadcasterMock.broadcast).toHaveBeenCalled();
  });

  it("should run closeClicked.emit on closeClick", fakeAsync(() => {
    component.closeClick();
    expect(component.closeClicked.emit).toHaveBeenCalled();
  }));

  it("should run broadcast on closeClick", () => {
    component.closeClick();
    expect(broadcasterMock.broadcast).toHaveBeenCalled();
  });
});
