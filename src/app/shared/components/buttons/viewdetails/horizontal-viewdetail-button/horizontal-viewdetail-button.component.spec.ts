import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HorizontalViewdetailButtonComponent } from "./horizontal-viewdetail-button.component";

describe("HorizontalViewdetailButtonComponent", () => {
  let component: HorizontalViewdetailButtonComponent;
  let fixture: ComponentFixture<HorizontalViewdetailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalViewdetailButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalViewdetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
