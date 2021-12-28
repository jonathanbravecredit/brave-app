import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { DataBreachCardComponent } from "./data-breach-card.component";

describe("DataBreachCardComponent", () => {
  let component: DataBreachCardComponent;
  let fixture: ComponentFixture<DataBreachCardComponent>;
  let routerMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);

    await TestBed.configureTestingModule({
      declarations: [DataBreachCardComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
