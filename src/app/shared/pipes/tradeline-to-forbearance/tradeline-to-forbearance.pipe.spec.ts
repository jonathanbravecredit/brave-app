import { ITradeLinePartition } from "@shared/interfaces";
import { TradelineToForbearancePipe } from "./tradeline-to-forbearance.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("TradelineToForbearancePipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new TradelineToForbearancePipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run isForbearanceAccount on transform", () => {
    let spy = spyOn(tu.queries.report, "isForbearanceAccount");
    pipe.transform([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });
});
