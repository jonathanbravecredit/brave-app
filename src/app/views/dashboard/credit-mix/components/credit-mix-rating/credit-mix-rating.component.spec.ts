import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreditMixRatingComponent } from "./credit-mix-rating.component";
import { CreditMixService } from "../../credit-mix-service/credit-mix-service.service";
import { BehaviorSubject } from 'rxjs';
import { ICreditMixView } from '../../credit-mix.model';

describe("CreditMixRatingComponent", () => {
  let component: CreditMixRatingComponent;
  let fixture: ComponentFixture<CreditMixRatingComponent>;
  let creditMixServiceMock: any;

  beforeEach(async () => {
    creditMixServiceMock = jasmine.createSpyObj("CreditMixService", [""], {model$: new BehaviorSubject<ICreditMixView>({} as ICreditMixView)});
    await TestBed.configureTestingModule({
      declarations: [CreditMixRatingComponent],
      providers: [
        { provide: CreditMixService, useValue: creditMixServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
