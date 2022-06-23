import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SigninPureComponent } from "./signin-pure.component";

describe("SigninPureComponent", () => {
  let component: SigninPureComponent;
  let fixture: ComponentFixture<SigninPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninPureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should create viewState with the default of "init" if a viewState is not passed in ', () => {
    expect(component.viewState).toEqual("init");
  });

  it("should create a blank message if nothing is passed in", () => {
    expect(component.message).toEqual("");
  });
});
