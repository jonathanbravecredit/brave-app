import { TradelineToAccountgroupPipe } from "./tradeline-to-accountgroup.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("TradelineToAccountgroupPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new TradelineToAccountgroupPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run filterTradelinesByCreditReportGroups on transform", () => {
    let spy = spyOn(tu.filters, "filterTradelinesByCreditReportGroups");
    pipe.transform([]);
    expect(spy).toHaveBeenCalled();
  });
});
