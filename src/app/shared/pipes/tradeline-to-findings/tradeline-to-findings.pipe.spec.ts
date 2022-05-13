import { ITradelineCreditBureauConfig } from "@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces";
import { TradelineToFindingsPipe } from "./tradeline-to-findings.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("TradelineToFindingsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new TradelineToFindingsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return undefined on transform if no tradeline", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual(undefined);
  });

  it("should run parseRemarks on transform", () => {
    let spy = spyOn(tu.parsers.report, "parseRemarks");
    pipe.transform({} as ITradelineCreditBureauConfig);
    expect(spy).toHaveBeenCalled();
  });
});
