import { CreditbureauToTradelinedetailsPipe } from "./creditbureau-to-tradelinedetails.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import {
  ICredit,
  ILineItem,
  IPublicRecord,
  ITrade,
} from "@shared/interfaces/credit-bureau.interface";
import { ISubscriber, ITradeLinePartition } from "@shared/interfaces";

describe("CreditbureauToTradelinedetailsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new CreditbureauToTradelinedetailsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return [] if creditBureau is undefined on transform", () => {
    let res = pipe.transform(undefined, undefined);
    expect(res).toEqual([]);
  });

  it("should run listFindingsByType on transform", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([]);
    let spy2 = spyOn(tu.queries.dispute, "listPublicRecords");
    spy2.and.returnValue([{} as IPublicRecord]);
    pipe.transform({}, {});
    expect(spy).toHaveBeenCalled();
  });

  it("should run listTrades on transform", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([]);
    let spy2 = spyOn(tu.queries.dispute, "listTrades");
    spy2.and.returnValue([{} as ITrade]);
    pipe.transform({}, {});
    expect(spy2).toHaveBeenCalled();
  });

  it("should run listUpdatedPublicRecords on transform", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([]);
    let spy2 = spyOn(tu.queries.dispute, "listTrades");
    spy2.and.returnValue([{} as ITrade]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedTradelines");
    spy3.and.returnValue([{} as ITradeLinePartition]);
    pipe.transform({}, {});
    expect(spy3).toHaveBeenCalled();
  });

  it("should return [] on transform if !publicRecordFindings.length", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([]);
    let spy2 = spyOn(tu.queries.dispute, "listTrades");
    spy2.and.returnValue([{} as ITrade]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedTradelines");
    spy3.and.returnValue([{} as ITradeLinePartition]);
    let res = pipe.transform({}, {});
    expect(res).toEqual([]);
  });

  it("should run unparseSubscriber on transform if !publicRecordFindings.length", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([
      {
        credit: {
          result: "deleted",
          item: {
            subscriber: {},
          },
        } as ICredit,
      } as ILineItem,
    ]);
    let spy2 = spyOn(tu.queries.dispute, "listTrades");
    spy2.and.returnValue([{} as ITrade]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedTradelines");
    spy3.and.returnValue([{} as ITradeLinePartition]);
    let spy4 = spyOn(tu.parsers.dispute, "unparseSubscriber");
    spy4.and.returnValue(["", "", ""]);
    pipe.transform({}, {});
    expect(spy4).toHaveBeenCalled();
  });
  it("should run unparseSubscriber on transform if publicRecordFindings.length", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([
      {
        credit: {
          result: "test",
          item: {
            subscriber: {},
          },
        } as ICredit,
      } as ILineItem,
    ]);
    let spy2 = spyOn(tu.queries.dispute, "listTrades");
    spy2.and.returnValue([{} as ITrade]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedTradelines");
    spy3.and.returnValue([{} as ITradeLinePartition]);
    let spy4 = spyOn(tu.parsers.dispute, "unparseSubscriber");
    spy4.and.returnValue(["", "", ""]);
    let spy5 = spyOn(tu.queries.dispute, "getUpdatedTradelineByKey");
    spy5.and.returnValue({} as ITradeLinePartition);
    let spy6 = spyOn(tu.queries.report, "getTradelineSubscriberByKey");
    spy6.and.returnValue({} as ISubscriber);
    pipe.transform({}, {});
    expect(spy4).toHaveBeenCalled();
  });

  it("should run getUpdatedTradelineByKey on transform if publicRecordFindings.length", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([
      {
        credit: {
          result: "test",
          item: {
            subscriber: {},
          },
        } as ICredit,
      } as ILineItem,
    ]);
    let spy2 = spyOn(tu.queries.dispute, "listTrades");
    spy2.and.returnValue([{} as ITrade]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedTradelines");
    spy3.and.returnValue([{} as ITradeLinePartition]);
    let spy4 = spyOn(tu.parsers.dispute, "unparseSubscriber");
    spy4.and.returnValue(["", "", ""]);
    let spy5 = spyOn(tu.queries.dispute, "getUpdatedTradelineByKey");
    spy5.and.returnValue({} as ITradeLinePartition);
    pipe.transform({}, {});
    expect(spy4).toHaveBeenCalled();
  });

  it("should run getTradelineSubscriberByKey on transform if publicRecordFindings.length", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([
      {
        credit: {
          result: "test",
          item: {
            subscriber: {},
          },
        } as ICredit,
      } as ILineItem,
    ]);
    let spy2 = spyOn(tu.queries.dispute, "listTrades");
    spy2.and.returnValue([{} as ITrade]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedTradelines");
    spy3.and.returnValue([{} as ITradeLinePartition]);
    let spy4 = spyOn(tu.parsers.dispute, "unparseSubscriber");
    spy4.and.returnValue(["", "", ""]);
    let spy5 = spyOn(tu.queries.dispute, "getUpdatedTradelineByKey");
    spy5.and.returnValue({} as ITradeLinePartition);
    let spy6 = spyOn(tu.queries.report, "getTradelineSubscriberByKey");
    spy6.and.returnValue({} as ISubscriber);
    pipe.transform({}, {});
    expect(spy6).toHaveBeenCalled();
  });
});
