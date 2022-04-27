import { IMergeReport } from "@bravecredit/brave-sdk";
import {
  ITradeLinePartition,
  ITrueLinkCreditReportType,
} from "@shared/interfaces";
import { DEFAULT_TRADELINE } from "@views/dashboard/negative-account/negative-account-initial/constants";
import { MergereportToNegativeTradelinesPipe } from "./mergereport-to-negative-tradelines.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("MergereportToNegativeTradelinesPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new MergereportToNegativeTradelinesPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return [DEFAULT_TRADELINE.tradeline] on transform if no tradeLines", () => {
    let res = pipe.transform({} as IMergeReport);
    expect(res).toEqual([DEFAULT_TRADELINE.tradeline]);
  });

  it("should run filterTradelines on transform", () => {
    let spy = spyOn(pipe, "filterTradelines");
    spy.and.returnValue(undefined);
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run filterTradelinesByStatusCodes on filterTradelines", () => {
    let spy = spyOn(tu.filters, "filterTradelinesByStatusCodes");
    pipe.filterTradelines([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });

  it("should run sortTradelineByAccountType on sortByAccountType", () => {
    let spy = spyOn(tu.sorters.report, "sortTradelineByAccountType");
    pipe.sortByAccountType([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });

  it("should run sortTradelineByDateOpened on sortByDateOpened", () => {
    let spy = spyOn(tu.sorters.report, "sortTradelineByDateOpened");
    pipe.sortByDateOpened([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });
});
