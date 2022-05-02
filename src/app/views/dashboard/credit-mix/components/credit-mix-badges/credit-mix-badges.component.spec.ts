import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreditMixBadgesComponent } from "./credit-mix-badges.component";
import { CreditMixService } from "../../credit-mix-service/credit-mix-service.service";
import { ICreditMixView } from '../../credit-mix.model';
import { BehaviorSubject } from 'rxjs';

//public creditMixService: CreditMixService

describe("CreditMixBadgesComponent", () => {
  let component: CreditMixBadgesComponent;
  let fixture: ComponentFixture<CreditMixBadgesComponent>;
  let creditMixServiceMock: any;

  beforeEach(async () => {
    creditMixServiceMock = jasmine.createSpyObj("CreditMixService", [""], {model$: new BehaviorSubject<ICreditMixView>({} as ICreditMixView)});
    await TestBed.configureTestingModule({
      declarations: [CreditMixBadgesComponent],
      providers: [
        { provide: CreditMixService, useValue: creditMixServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMixBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
