import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SignupPureComponent } from "./signup-pure.component";

describe("SignupPureComponent", () => {
  let component: SignupPureComponent;
  let fixture: ComponentFixture<SignupPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupPureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("viewState should be init if none is passed in", () => {
    expect(component.viewState).toEqual("init");
  });

  it('should change the viewState to "invalid" if it is passed in', () => {
    component.viewState = "invalid";
    fixture.detectChanges();
    expect(component.viewState).toEqual("invalid");
  });

  it("message should be init if none is passed in", () => {
    expect(component.message).toEqual("");
  });

  it('should change the message to "invalid" if it is passed in', () => {
    component.message = "test message";
    fixture.detectChanges();
    expect(component.message).toEqual("test message");
  });
});
