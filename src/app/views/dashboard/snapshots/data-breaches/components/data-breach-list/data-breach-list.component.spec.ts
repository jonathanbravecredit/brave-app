import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { DataBreachListComponent } from "./data-breach-list.component";

describe("DataBreachListComponent", () => {
  let component: DataBreachListComponent;
  let fixture: ComponentFixture<DataBreachListComponent>;
  let routerMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);

    await TestBed.configureTestingModule({
      declarations: [DataBreachListComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
