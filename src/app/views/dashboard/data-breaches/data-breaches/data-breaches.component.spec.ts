import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { DataBreachesComponent } from "./data-breaches.component";
import { DataBreachesViewService } from "../data-breaches-view.service";

//   private route: ActivatedRoute,
//   public dataBreachesViewService: DataBreachesViewService

describe("DataBreachesComponent", () => {
  let component: DataBreachesComponent;
  let fixture: ComponentFixture<DataBreachesComponent>;
  let routeMock: any;
  let dataBreachesViewServiceMock: any;

  beforeEach(async () => {
    routeMock = jasmine.createSpyObj("ActivatedRoute", [""], { data: of() });
    dataBreachesViewServiceMock = jasmine.createSpyObj(
      "dataBreachesViewService",
      ["initialModelMerge"]
    );
    await TestBed.configureTestingModule({
      declarations: [DataBreachesComponent],
      providers: [
        { provide: ActivatedRoute, useValue: routeMock },
        {
          provide: DataBreachesViewService,
          useValue: dataBreachesViewServiceMock,
        },
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
