import { AccountTypes, IMergeReport } from "@bravecredit/brave-sdk";
import { ITradeLinePartition } from "@shared/interfaces";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import { MergereportToTradelinesPipe } from "./mergereport-to-tradelines.pipe";

describe("MergereportToTradelinesPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new MergereportToTradelinesPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return [{} as ITradeLinePartition] on transform if no partition", () => {
    let res = pipe.transform({} as IMergeReport);
    expect(res).toEqual([{} as ITradeLinePartition]);
  });

  it("should run filterByAccountType on transform", () => {
    let spy = spyOn(pipe, "filterByAccountType");
    spy.and.returnValue([]);
    pipe.transform({
      TrueLinkCreditReportType: { TradeLinePartition: {} },
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run sortTradelineByPayStatus on transform", () => {
    let spy = spyOn(tu.sorters.report, "sortTradelineByPayStatus");
    spy.and.returnValue([]);
    pipe.transform({
      TrueLinkCreditReportType: { TradeLinePartition: {} },
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should return [{} as ITradeLinePartition] on transform if no partition", () => {
    let mock = [{} as ITradeLinePartition];
    let res = pipe.filterByAccountType(mock, []);
    expect(res).toEqual(mock);
  });

  it("should run getTradelineTypeDescription on transform", () => {
    let spy = spyOn(tu.queries.report, "getTradelineTypeDescription");
    spy.and.returnValue({} as AccountTypes);
    pipe.filterByAccountType([{} as ITradeLinePartition], [{} as AccountTypes]);
    expect(spy).toHaveBeenCalled();
  });
});
