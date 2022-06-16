import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WaitlistWelcomeComponent } from "./waitlist-welcome.component";
import { WaitlistService } from "../waitlist.service";
import { BehaviorSubject } from "rxjs";

//WaitlistService: WaitlistService

describe("WaitlistWelcomeComponent", () => {
  let component: WaitlistWelcomeComponent;
  let fixture: ComponentFixture<WaitlistWelcomeComponent>;
  let WaitlistServiceMock: any;

  beforeEach(async () => {
    WaitlistServiceMock = jasmine.createSpyObj(
      "WaitlistService",
      ["waitlistFormSubmit"],
      {
        addedToWaitlist: new BehaviorSubject<boolean>(false),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [WaitlistWelcomeComponent],
      providers: [{ provide: WaitlistService, useValue: WaitlistServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitlistWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
