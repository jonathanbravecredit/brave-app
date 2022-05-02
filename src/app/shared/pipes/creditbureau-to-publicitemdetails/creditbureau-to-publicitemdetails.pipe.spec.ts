import { CreditbureauToPublicitemdetailsPipe } from "./creditbureau-to-publicitemdetails.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import {
  ICredit,
  ILineItem,
  IPublicRecord,
} from "@shared/interfaces/credit-bureau.interface";
import { IPublicPartition } from "@shared/interfaces";
import { TInvestigationResultCode } from "@views/dashboard/disputes/components/findings/dispute-findings-results-details/interfaces";

describe("CreditbureauToPublicitemdetailsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new CreditbureauToPublicitemdetailsPipe();
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

  it("should run listPublicRecords on transform", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([]);
    let spy2 = spyOn(tu.queries.dispute, "listPublicRecords");
    spy2.and.returnValue([{} as IPublicRecord]);
    pipe.transform({}, {});
    expect(spy2).toHaveBeenCalled();
  });

  it("should run listUpdatedPublicRecords on transform", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([]);
    let spy2 = spyOn(tu.queries.dispute, "listPublicRecords");
    spy2.and.returnValue([{} as IPublicRecord]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedPublicRecords");
    spy3.and.returnValue([{} as IPublicPartition]);
    pipe.transform({}, {});
    expect(spy3).toHaveBeenCalled();
  });

  it("should return [] on transform if !publicRecordFindings.length", () => {
    let spy = spyOn(tu.queries.dispute, "listFindingsByType");
    spy.and.returnValue([]);
    let spy2 = spyOn(tu.queries.dispute, "listPublicRecords");
    spy2.and.returnValue([{} as IPublicRecord]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedPublicRecords");
    spy3.and.returnValue([{} as IPublicPartition]);
    let res = pipe.transform({}, {});
    expect(res).toEqual([]);
  });

  it("should run unparseSubscriber on transform if publicRecordFindings and result is deleted", () => {
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
    let spy2 = spyOn(tu.queries.dispute, "listPublicRecords");
    spy2.and.returnValue([{} as IPublicRecord]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedPublicRecords");
    spy3.and.returnValue([{} as IPublicPartition]);
    let spy4 = spyOn(tu.parsers.dispute, "unparseSubscriber");
    spy4.and.returnValue(["", "", ""]);
    pipe.transform({}, {});
    expect(spy4).toHaveBeenCalled();
  });

  it("should run unparseSubscriber on transform if publicRecordFindings and result is not deleted", () => {
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
    let spy2 = spyOn(tu.queries.dispute, "listPublicRecords");
    spy2.and.returnValue([{} as IPublicRecord]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedPublicRecords");
    spy3.and.returnValue([{} as IPublicPartition]);
    let spy4 = spyOn(tu.parsers.dispute, "unparseSubscriber");
    spy4.and.returnValue(["", "", ""]);
    let spy5 = spyOn(tu.queries.dispute, "getUpdatedPublicRecordByKey");
    spy5.and.returnValue({} as IPublicPartition);
    pipe.transform({}, {});
    expect(spy4).toHaveBeenCalled();
  });

  it("should run getUpdatedPublicRecordByKey on transform if publicRecordFindings and result is not deleted", () => {
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
    let spy2 = spyOn(tu.queries.dispute, "listPublicRecords");
    spy2.and.returnValue([{} as IPublicRecord]);
    let spy3 = spyOn(tu.queries.dispute, "listUpdatedPublicRecords");
    spy3.and.returnValue([{} as IPublicPartition]);
    let spy4 = spyOn(tu.parsers.dispute, "unparseSubscriber");
    spy4.and.returnValue(["", "", ""]);
    let spy5 = spyOn(tu.queries.dispute, "getUpdatedPublicRecordByKey");
    spy5.and.returnValue({} as IPublicPartition);
    pipe.transform({}, {});
    expect(spy5).toHaveBeenCalled();
  });
});
