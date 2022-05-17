import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DataBreachShareComponent } from "./data-breach-share.component";
import { BehaviorSubject } from "rxjs";
import { IDataBreachesView } from "../../data-breaches.model";
import { DataBreachesViewService } from "../../data-breaches-view.service";

describe("DataBreachShareComponent", () => {
  let component: DataBreachShareComponent;
  let fixture: ComponentFixture<DataBreachShareComponent>;
  let dataBreachesViewServiceMock: any;

  beforeEach(async () => {
    dataBreachesViewServiceMock = jasmine.createSpyObj(
      "DataBreachesViewService",
      [""],
      {
        model$: new BehaviorSubject<IDataBreachesView>({} as IDataBreachesView),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [DataBreachShareComponent],
      providers: [
        {
          provide: DataBreachesViewService,
          useValue: dataBreachesViewServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBreachShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
