import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { NavigationService } from "./navigation.service";
import { of } from "rxjs";

//private router: Router, private location: Location

describe("NavigationService", () => {
  let service: NavigationService;
  let locationMock: any;
  let routerMock: any;

  beforeEach(() => {
    locationMock = jasmine.createSpyObj("Location", ["back"]);
    routerMock = jasmine.createSpyObj("Router", ["navigate", 'navigateByUrl'], {url: '', events: of()})
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: Location, useValue: locationMock },
      ],
    });
    service = TestBed.inject(NavigationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it('should call location.back if histort >= 0 on back', () => {
    service.history = 1
    service.back()
    expect(locationMock.back).toHaveBeenCalled()
  })

  it('should run router.navigate on back if history < 0 and segements.length', () => {
    service.history = -1
    routerMock.url = 'test/test'
    service.back()
    expect(routerMock.navigate).toHaveBeenCalled()
  })
});
