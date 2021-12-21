import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthService } from "@shared/services/auth/auth.service";
import { of } from "rxjs";
import { SignupThankyouComponent } from "./signup-thankyou.component";

describe("SignupThankyouComponent", () => {
  let component: SignupThankyouComponent;
  let fixture: ComponentFixture<SignupThankyouComponent>;
  let routerMock: any;
  class AuthMock {
    email$ = of();
  }

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    await TestBed.configureTestingModule({
      declarations: [SignupThankyouComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useClass: AuthMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
