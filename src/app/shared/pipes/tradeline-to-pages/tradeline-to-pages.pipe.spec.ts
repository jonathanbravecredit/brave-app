import { ITradeLinePartition } from "@shared/interfaces";
import { TradelineToPagesPipe } from "./tradeline-to-pages.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("TradelineToPagesPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new TradelineToPagesPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run mapToDetailsPageOne on transform", () => {
    let spy = spyOn(pipe, "mapToDetailsPageOne");
    pipe.transform({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });

  it("should run mapToDetailsPageTwo on transform", () => {
    let spy = spyOn(pipe, "mapToDetailsPageTwo");
    pipe.transform({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });

  it("should run mapToPaymentHistory on transform", () => {
    let spy = spyOn(pipe, "mapToPaymentHistory");
    pipe.transform({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });

  it("should run mapToRemarks on transform", () => {
    let spy = spyOn(pipe, "mapToRemarks");
    pipe.transform({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });

  it("should run getOriginalCreditor on mapToDetailsPageOne", () => {
    let spy = spyOn(tu.queries.report, "getOriginalCreditor");
    pipe.mapToDetailsPageOne({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });

  it("should run getOriginalCreditor on mapToDetailsPageTwo", () => {
    let spy = spyOn(tu.queries.report, "getOriginalCreditor");
    pipe.mapToDetailsPageTwo({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });

  it("should run parseRemarks on mapToRemarks", () => {
    let spy = spyOn(pipe, "parseRemarks");
    pipe.mapToRemarks({} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });
});
