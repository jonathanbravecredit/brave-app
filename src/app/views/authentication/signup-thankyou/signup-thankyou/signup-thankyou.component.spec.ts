import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthService } from "@shared/services/auth/auth.service";
import { SignupThankyouComponent } from "./signup-thankyou.component";


describe("SignupThankyouComponent", () => {
  let component: SignupThankyouComponent;
  let fixture: ComponentFixture<SignupThankyouComponent>;
  let routerMock: any;
  let authMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    authMock = jasmine.createSpyObj("AuthService", [""]);
    await TestBed.configureTestingModule({
      declarations: [SignupThankyouComponent],
      providers: [
        {provide: Router, useValue: routerMock},
        {provide: AuthService, useValue: authMock},
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
