import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TradelineToAccountgroupPipe } from "@shared/pipes/tradeline-to-accountgroup/tradeline-to-accountgroup.pipe";

import { ForbearancePureView } from "./forbearance-pure.view";

describe("ForbearancePureView", () => {
  let component: ForbearancePureView;
  let fixture: ComponentFixture<ForbearancePureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForbearancePureView, TradelineToAccountgroupPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearancePureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
