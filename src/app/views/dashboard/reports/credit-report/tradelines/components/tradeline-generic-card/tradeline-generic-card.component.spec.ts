import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TradelineToDetailsPipe } from "@shared/pipes/tradeline-to-details/tradeline-to-details.pipe";
import { TransunionUtil } from "@shared/utils/transunion/transunion";

import { TradelineGenericCardComponent } from "./tradeline-generic-card.component";

describe("TradelineGenericCardComponent", () => {
  let component: TradelineGenericCardComponent;
  let fixture: ComponentFixture<TradelineGenericCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradelineGenericCardComponent, TradelineToDetailsPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelineGenericCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should run getTradelineSubscriberByKey on int', () => {
    spyOn(TransunionUtil.queries.report, 'getTradelineSubscriberByKey')
    component.ngOnInit()
    expect(TransunionUtil.queries.report.getTradelineSubscriberByKey).toHaveBeenCalled()
  })
});
