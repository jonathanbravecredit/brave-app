import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LinkifyPipe } from "@shared/pipes/linkify/linkify.pipe";

import { ForbearanceTipsComponent } from "./forbearance-tips.component";

describe("ForbearanceTipsComponent", () => {
  let component: ForbearanceTipsComponent;
  let fixture: ComponentFixture<ForbearanceTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForbearanceTipsComponent, LinkifyPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
