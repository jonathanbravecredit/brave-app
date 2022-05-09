import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LinkViewdetailButtonComponent } from "./link-viewdetail-button.component";

describe("LinkViewdetailButtonComponent", () => {
  let component: LinkViewdetailButtonComponent;
  let fixture: ComponentFixture<LinkViewdetailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkViewdetailButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkViewdetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
