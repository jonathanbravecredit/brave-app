import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TradelineToDetailsPipe } from "@shared/pipes/tradeline-to-details/tradeline-to-details.pipe";
import { FeatureFlagsService } from "@shared/services/featureflags/feature-flags.service";

import { TradelineDetailsComponent } from "./tradeline-details.component";

//public featureFlags: FeatureFlagsService

describe("TradelineDetailsComponent", () => {
  let component: TradelineDetailsComponent;
  let fixture: ComponentFixture<TradelineDetailsComponent>;
  let featureFlagsMock: any;

  beforeEach(async () => {
    featureFlagsMock = jasmine.createSpyObj("FeatureFlagsService", [""]);
    await TestBed.configureTestingModule({
      declarations: [TradelineDetailsComponent, TradelineToDetailsPipe],
      providers: [{ provide: FeatureFlagsService, useValue: featureFlagsMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
