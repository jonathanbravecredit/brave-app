import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { APIService } from "@shared/services/aws/api.service";
import { StateService } from "@shared/services/state/state.service";
import { DataBreachesComponent } from "@views/dashboard/data-breaches/data-breaches/data-breaches.component";
import { Observable, of } from "rxjs";

//   private route: ActivatedRoute,
//   public dataBreachesViewService: DataBreachesViewService

describe("DataBreachesComponent", () => {
  // let component: DataBreachesComponent;
  // let fixture: ComponentFixture<DataBreachesComponent>;
  // let stateMock: any;
  // let apiMock: any;
  // let routeMock: any;

  // beforeEach(async () => {
  //   stateMock = jasmine.createSpyObj("StateService", ["dispatch"]);
  //   apiMock = jasmine.createSpyObj("APIService", [""]);
  //   routeMock = jasmine.createSpyObj("ActivatedRoute", [""], {
  //     data: of({ breaches: {} }),
  //   });
  //   await TestBed.configureTestingModule({
  //     declarations: [DataBreachesComponent],
  //     providers: [
  //       { provide: StateService, useValue: stateMock },
  //       { provide: ActivatedRoute, useClass: routeMock },
  //       { provide: APIService, useValue: apiMock },
  //     ],
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(DataBreachesComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });

  // it("should store.run dispatch on onCardClick", () => {
  //   stateMock.dispatch.and.returnValue(new Observable<any>());
  //   component.onCardClick(1);
  //   expect(stateMock.dispatch).toHaveBeenCalled();
  // });
});
