import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { DataBreachListComponent } from "./data-breach-list.component";
import { IDataBreachesView } from "../../data-breaches.model";
import { BehaviorSubject } from "rxjs";
import { DataBreachesViewService } from "../../data-breaches-view.service";

describe("DataBreachListComponent", () => {
  let component: DataBreachListComponent;
  let fixture: ComponentFixture<DataBreachListComponent>;
  let routerMock: any;
  let dataBreachesViewServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    dataBreachesViewServiceMock = jasmine.createSpyObj(
      "DataBreachesViewService",
      [""],
      {
        model$: new BehaviorSubject<IDataBreachesView>({} as IDataBreachesView),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [DataBreachListComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        {
          provide: DataBreachesViewService,
          useValue: dataBreachesViewServiceMock,
        },
      ],
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
