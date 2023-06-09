import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { DataBreachCardComponent } from "./data-breach-card.component";
import { BehaviorSubject } from "rxjs";
import { IDataBreachesView } from "../../data-breaches.model";
import { DataBreachesViewService } from '../../data-breaches-view.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkifyPipe } from '../../../../../shared/pipes/linkify/linkify.pipe';

//public dataBreachesViewService: DataBreachesViewService

describe("DataBreachCardComponent", () => {
  let component: DataBreachCardComponent;
  let fixture: ComponentFixture<DataBreachCardComponent>;
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
      imports: [BrowserAnimationsModule],
      declarations: [DataBreachCardComponent, LinkifyPipe],
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
    fixture = TestBed.createComponent(DataBreachCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
