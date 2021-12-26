import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { ReferralsService } from "@shared/services/referrals/referrals.service";
import { of } from "rxjs";

import { AuthenticationComponent } from "./authentication.component";

describe("AuthenticationComponent", () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  class RouteMock {
    queryParams = of();
  }
  let referralsMock: any;

  beforeEach(async () => {
    referralsMock = jasmine.createSpyObj("ReferralsService", [""]);
    await TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      providers: [
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: ReferralsService, useValue: referralsMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
