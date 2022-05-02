import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CreditMixFilterPipePipe } from "../credit-mix-filter-pipe/credit-mix-filter-pipe.pipe";

import { CreditMixPureView } from "./credit-mix-pure.view";
import { CreditMixService } from "../credit-mix-service/credit-mix-service.service";
import { BehaviorSubject } from 'rxjs';
import { ICreditMixView } from '../credit-mix.model';

describe("CreditMixPureView", () => {
  let component: CreditMixPureView;
  let fixture: ComponentFixture<CreditMixPureView>;
  let creditMixServiceMock: any;

  beforeEach(async () => {
    creditMixServiceMock = jasmine.createSpyObj("CreditMixService", [""], {model$: new BehaviorSubject<ICreditMixView>({} as ICreditMixView)});
    await TestBed.configureTestingModule({
      declarations: [CreditMixPureView, CreditMixFilterPipePipe],
      providers: [
        { provide: CreditMixService, useValue: creditMixServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixPureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
