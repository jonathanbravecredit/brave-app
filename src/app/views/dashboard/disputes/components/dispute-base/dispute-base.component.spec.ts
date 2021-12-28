import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { DisputeReasonPageService } from "../dispute-reason-page/dispute-reason-page.service";

import { DisputeBaseComponent } from "./dispute-base.component";

describe("DisputeBaseComponent", () => {
  let component: DisputeBaseComponent;
  let fixture: ComponentFixture<DisputeBaseComponent>;
  let routerMock: any;
  class routeMock {
    queryParams = of();
  }
  class reasonPageServiceMock {
    cardSelected$ = of();
  }

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("", [""]);
    await TestBed.configureTestingModule({
      declarations: [DisputeBaseComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: routeMock },
        { provide: DisputeReasonPageService, useClass: reasonPageServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
