import { TestBed } from "@angular/core/testing";

import { NavigatorService } from "./navigator.service";
import { Router } from "@angular/router";
import { BroadcastService } from "../broadcast/broadcast.service";
import { of } from 'rxjs/internal/observable/of';

//private router: Router, broadcastService: BroadcastService

describe("NavigatorService", () => {
  let service: NavigatorService;
  let routerMock: any;
  let broadcastServiceMock: any;

  beforeEach(() => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    broadcastServiceMock = jasmine.createSpyObj("BroadcastService", ["on"]);
    broadcastServiceMock.on.and.returnValue(of(''))
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: BroadcastService, useValue: broadcastServiceMock },
      ],
    });
    service = TestBed.inject(NavigatorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
