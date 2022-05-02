import { IMergeReport } from "@bravecredit/brave-sdk";
import { ICreditReportCardInputs } from "@shared/components/cards/credit-report-card/credit-report-card.component";
import {
  ITradeLinePartition,
  ITrueLinkCreditReportType,
} from "@shared/interfaces";
import { MergereportToCreditreportPipe } from "./mergereport-to-creditreport.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import { ICreditReportTradelinesCardGroup } from "@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component";

describe("MergereportToCreditreportPipe", () => {
  let pipe: any;
  let sortByCreditReportGroupsSpy: any;
  let sortTradelineByDateOpenedSpy: any;
  let mapTradelineToSummaryCardSpy: any;
  beforeAll(() => {
    sortByCreditReportGroupsSpy = spyOn(
      tu.sorters.report,
      "sortByCreditReportGroups"
    );
    sortByCreditReportGroupsSpy.and.returnValue([]);
    sortTradelineByDateOpenedSpy = spyOn(
      tu.sorters.report,
      "sortTradelineByDateOpened"
    );
    sortTradelineByDateOpenedSpy.and.returnValue([]);
    mapTradelineToSummaryCardSpy = spyOn(
      tu.mappers,
      "mapTradelineToSummaryCard"
    );
    mapTradelineToSummaryCardSpy.and.returnValue([]);

    pipe = new MergereportToCreditreportPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run sortByCreditReportGroups on transform", () => {
    let spy = spyOn(pipe, "sortByCreditReportGroups");
    let spy2 = spyOn(pipe, "sortByDateOpened");
    spy2.and.returnValue([{} as ITradeLinePartition]);
    let spy3 = spyOn(pipe, "mapTradeLineToAccount");
    spy3.and.returnValue([{} as ICreditReportCardInputs]);
    let spy4 = spyOn(pipe, "groupCreditReportAccounts");
    spy3.and.returnValue([{} as ICreditReportTradelinesCardGroup]);
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run sortByDateOpened on transform", () => {
    let spy = spyOn(pipe, "sortByCreditReportGroups");
    let spy2 = spyOn(pipe, "sortByDateOpened");
    spy2.and.returnValue([{} as ITradeLinePartition]);
    let spy3 = spyOn(pipe, "mapTradeLineToAccount");
    spy3.and.returnValue([{} as ICreditReportCardInputs]);
    let spy4 = spyOn(pipe, "groupCreditReportAccounts");
    spy3.and.returnValue([{} as ICreditReportTradelinesCardGroup]);
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy2).toHaveBeenCalled();
  });

  it("should run mapTradeLineToAccount on transform", () => {
    let spy = spyOn(pipe, "sortByCreditReportGroups");
    let spy2 = spyOn(pipe, "sortByDateOpened");
    spy2.and.returnValue([{} as ITradeLinePartition]);
    let spy3 = spyOn(pipe, "mapTradeLineToAccount");
    spy3.and.returnValue([{} as ICreditReportCardInputs]);
    let spy4 = spyOn(pipe, "groupCreditReportAccounts");
    spy3.and.returnValue([{} as ICreditReportTradelinesCardGroup]);
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy3).toHaveBeenCalled();
  });

  it("should run groupCreditReportAccounts on transform", () => {
    let spy = spyOn(pipe, "sortByCreditReportGroups");
    let spy2 = spyOn(pipe, "sortByDateOpened");
    spy2.and.returnValue([{} as ITradeLinePartition]);
    let spy3 = spyOn(pipe, "mapTradeLineToAccount");
    spy3.and.returnValue([{} as ICreditReportCardInputs]);
    let spy4 = spyOn(pipe, "groupCreditReportAccounts");
    spy3.and.returnValue([{} as ICreditReportTradelinesCardGroup]);
    pipe.transform({
      TrueLinkCreditReportType: {
        TradeLinePartition: [{} as ITradeLinePartition],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy4).toHaveBeenCalled();
  });

  it("should run sortByCreditReportGroups on sortByCreditReportGroups", () => {
    pipe.sortByCreditReportGroups([{} as ITradeLinePartition]);
    expect(sortByCreditReportGroupsSpy).toHaveBeenCalled();
  });

  it("should run sortTradelineByDateOpened on sortByDateOpened", () => {
    pipe.sortByDateOpened([{} as ITradeLinePartition]);
    expect(sortTradelineByDateOpenedSpy).toHaveBeenCalled();
  });

  it("should run mapTradelineToSummaryCard on mapTradeLineToAccount", () => {
    pipe.mapTradeLineToAccount([{} as ITradeLinePartition]);
    expect(mapTradelineToSummaryCardSpy).toHaveBeenCalled();
  });
});
