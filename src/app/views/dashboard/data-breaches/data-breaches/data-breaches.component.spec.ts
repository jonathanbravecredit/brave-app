import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { APIService } from "@shared/services/aws/api.service";
import { of } from "rxjs";

import { DataBreachesComponent } from "./data-breaches.component";

describe("DataBreachesComponent", () => {
  let component: DataBreachesComponent;
  let fixture: ComponentFixture<DataBreachesComponent>;
  let storeMock: any;
  let apiMock: any;
  class RouteMock {
    data = of();
  }
  let routerMock: any;

  beforeEach(async () => {
    storeMock = jasmine.createSpyObj("Store", [
      "getTradelineSummary",
      "getRecommendations",
    ]);
    routerMock = jasmine.createSpyObj("Router", [""]);
    apiMock = jasmine.createSpyObj("APIService", [""]);
    await TestBed.configureTestingModule({
      declarations: [DataBreachesComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: Store, useValue: storeMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: APIService, useValue: apiMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
