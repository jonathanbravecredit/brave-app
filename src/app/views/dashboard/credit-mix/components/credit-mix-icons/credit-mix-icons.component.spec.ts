import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreditMixIconsComponent } from "./credit-mix-icons.component";
import { CreditMixService } from "../../credit-mix-service/credit-mix-service.service";
import { BehaviorSubject } from 'rxjs';
import { ICreditMixView } from '../../credit-mix.model';

describe("CreditMixIconsComponent", () => {
  let component: CreditMixIconsComponent;
  let fixture: ComponentFixture<CreditMixIconsComponent>;
  let creditMixServiceMock: any;

  beforeEach(async () => {
    creditMixServiceMock = jasmine.createSpyObj("CreditMixService", [""], {model$: new BehaviorSubject<ICreditMixView>({} as ICreditMixView)});
    await TestBed.configureTestingModule({
      declarations: [CreditMixIconsComponent],
      providers: [
        { provide: CreditMixService, useValue: creditMixServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
