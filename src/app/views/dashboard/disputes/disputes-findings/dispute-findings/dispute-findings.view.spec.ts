import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { of } from "rxjs";

import { DisputeFindingsView } from "./dispute-findings.view";

describe("DisputeFindingsView", () => {
  let component: DisputeFindingsView;
  let fixture: ComponentFixture<DisputeFindingsView>;
  class RouteMock {
    data = of();
  }
  let DisputeServiceMock: any;

  beforeEach(async () => {
    DisputeServiceMock = jasmine.createSpyObj(
      "DisputeService",
      [""],
      ["currentDispute$"]
    );
    await TestBed.configureTestingModule({
      declarations: [DisputeFindingsView],
      providers: [
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: DisputeService, useValue: DisputeServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeFindingsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
