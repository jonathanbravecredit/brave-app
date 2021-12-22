import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";

import { BaseExceptionView } from "./base-exception.view";

//private router: Router, public route: ActivatedRoute

describe("BaseExceptionView", () => {
  let component: BaseExceptionView;
  let fixture: ComponentFixture<BaseExceptionView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    await TestBed.configureTestingModule({
      declarations: [BaseExceptionView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseExceptionView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
