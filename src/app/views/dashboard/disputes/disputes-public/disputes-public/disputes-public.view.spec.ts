import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { DisputeService } from "@shared/services/dispute/dispute.service";

import { DisputesPublicView } from "./disputes-public.view";

describe("DisputesPublicView", () => {
  let component: DisputesPublicView;
  let fixture: ComponentFixture<DisputesPublicView>;
  let routerMock: any;
  let routeMock: any;
  let disputeServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    routeMock = jasmine.createSpyObj("ActivatedRoute", [""]);
    disputeServiceMock = jasmine.createSpyObj("DisputeService", [""]);
    await TestBed.configureTestingModule({
      declarations: [DisputesPublicView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: DisputeService, useValue: disputeServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesPublicView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
