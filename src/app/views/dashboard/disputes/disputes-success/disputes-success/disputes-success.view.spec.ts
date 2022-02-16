import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { DisputesSuccessView } from "./disputes-success.view";

describe("DisputesSuccessView", () => {
  let component: DisputesSuccessView;
  let fixture: ComponentFixture<DisputesSuccessView>;
  let routerMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    await TestBed.configureTestingModule({
      declarations: [DisputesSuccessView],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesSuccessView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should run router.navigate when onGoBackClick is called', () => {
    component.onGoBackClick()

    expect(routerMock.navigate).toHaveBeenCalled()
  })
});
