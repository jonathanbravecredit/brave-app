import { TradelineToDetailsPipe } from "./tradeline-to-details.pipe";
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ITradeLinePartition } from "@shared/interfaces";

describe("TradelineToDetailsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new TradelineToDetailsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return null on transform if no ITradeLinePartition", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual(null);
  });

  it("should run parseRemarks on transform", () => {
    let spy = spyOn(tu.parsers.report, "parseRemarks");
    pipe.transform({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });

  it("should run getOriginalCreditor on transform", () => {
    let spy = spyOn(tu.queries.report, "getOriginalCreditor");
    pipe.transform({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });
});
