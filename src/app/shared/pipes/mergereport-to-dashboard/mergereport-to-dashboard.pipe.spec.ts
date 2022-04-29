import { IMergeReport } from "@bravecredit/brave-sdk";
import {
  IBorrower,
  ITradeLinePartition,
  ITrueLinkCreditReportType,
} from "@shared/interfaces";
import { MergereportToDashboardPipe } from "./mergereport-to-dashboard.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("MergereportToDashboardPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new MergereportToDashboardPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return undefined on transform if no report", () => {
    let res = pipe.transform(undefined);
    expect(res).toBeUndefined();
  });

  it("should run addNegativeCard on transform", () => {
    let spy = spyOn(pipe, "addNegativeCard");
    pipe.transform({
      TrueLinkCreditReportType: {} as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run filterTradelines on transform", () => {
    let spy = spyOn(pipe, "filterTradelines");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run haveNegativeAccounts on transform", () => {
    let spy = spyOn(pipe, "haveNegativeAccounts");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run addNegativeCard on transform if haveNegativeAccounts is true", () => {
    let spy = spyOn(pipe, "haveNegativeAccounts");
    spy.and.returnValue(true);
    let spy2 = spyOn(pipe, "addNegativeCard");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy2).toHaveBeenCalled();
  });

  it("should run addNegativeCard on transform if haveNegativeAccounts is false", () => {
    let spy = spyOn(pipe, "haveNegativeAccounts");
    spy.and.returnValue(false);
    let spy2 = spyOn(pipe, "addNegativeCard");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy2).toHaveBeenCalled();
  });

  it("should run haveForbearanceAccounts on transform", () => {
    let spy = spyOn(pipe, "haveForbearanceAccounts");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run addForbearanceCard on transform if haveForbearanceAccounts is true", () => {
    let spy = spyOn(pipe, "haveForbearanceAccounts");
    spy.and.returnValue(true);
    let spy2 = spyOn(pipe, "addForbearanceCard");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy2).toHaveBeenCalled();
  });

  it("should run addForbearanceCard on transform if haveForbearanceAccounts is false", () => {
    let spy = spyOn(pipe, "haveForbearanceAccounts");
    spy.and.returnValue(false);
    let spy2 = spyOn(pipe, "addForbearanceCard");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy2).toHaveBeenCalled();
  });

  it("should run haveDatabreaches on transform", () => {
    let spy = spyOn(pipe, "haveDatabreaches");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run addDatabreachCard on transform if haveDatabreaches is true", () => {
    let spy = spyOn(pipe, "haveDatabreaches");
    spy.and.returnValue(true);
    let spy2 = spyOn(pipe, "addDatabreachCard");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy2).toHaveBeenCalled();
  });

  it("should run addDatabreachCard on transform if haveDatabreaches is false", () => {
    let spy = spyOn(pipe, "haveDatabreaches");
    spy.and.returnValue(false);
    let spy2 = spyOn(pipe, "addDatabreachCard");
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy2).toHaveBeenCalled();
  });

  it("should run isNegativeAccount on filterTradelines", () => {
    let spy = spyOn(tu.queries.report, "isNegativeAccount");
    pipe.filterTradelines([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });

  it("should run isForbearanceAccount on filterTradelines", () => {
    let spy = spyOn(tu.queries.report, "isForbearanceAccount");
    pipe.filterTradelines([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });

  it("should run isNegativeAccount on haveNegativeAccounts", () => {
    let spy = spyOn(tu.queries.report, "isNegativeAccount");
    pipe.haveNegativeAccounts([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });

  it("should run isForbearanceAccount on haveForbearanceAccounts", () => {
    let spy = spyOn(tu.queries.report, "isForbearanceAccount");
    pipe.haveForbearanceAccounts([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });

  it("should run listDataBreaches on haveDatabreaches", () => {
    let spy = spyOn(tu.queries.report, "listDataBreaches");
    pipe.haveDatabreaches([{} as ITradeLinePartition]);
    expect(spy).toHaveBeenCalled();
  });
});
