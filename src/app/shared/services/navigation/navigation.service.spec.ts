import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { NavigationService } from "./navigation.service";
import { of } from "rxjs";

//private router: Router, private location: Location

describe("NavigationService", () => {
  let service: NavigationService;
  class RouterMock {
    public events = of()
  };
  let locationMock: any;

  beforeEach(() => {
    locationMock = jasmine.createSpyObj("Location", ["back"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useClass: RouterMock },
        { provide: Location, useValue: locationMock },
      ],
    });
    service = TestBed.inject(NavigationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
