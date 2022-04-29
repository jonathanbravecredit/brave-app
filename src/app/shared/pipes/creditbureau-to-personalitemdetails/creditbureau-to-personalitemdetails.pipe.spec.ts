import { CreditBureauFindingsType } from "@bravecredit/brave-sdk";
import { IBorrower } from "@shared/interfaces";
import { ILineItem } from "@shared/interfaces/credit-bureau.interface";
import { TransunionUtil } from "@shared/utils/transunion/transunion";
import { CreditbureauToPersonalitemdetailsPipe } from "./creditbureau-to-personalitemdetails.pipe";

describe("CreditbureauToPersonalitemdetailsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new CreditbureauToPersonalitemdetailsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return [] if creditBureau is undefined on transform", () => {
    let res = pipe.transform(undefined, undefined);
    expect(res).toEqual([]);
  });

  it("should run getLineItems on transform", () => {
    let spy = spyOn(TransunionUtil.queries.dispute, "getLineItems");
    spy.and.returnValue([]);
    pipe.transform({}, { Borrower: {} });
    expect(spy).toHaveBeenCalled();
  });

  it("should run getLineItems on transform", () => {
    let mockBorrower = {} as IBorrower;
    let spy = spyOn(TransunionUtil.queries.dispute, "getLineItems");
    spy.and.returnValue([
      {
        handle: "ab",
        credit: { result: "test1", reason: "test2" },
      } as ILineItem,
    ]);
    let res = pipe.transform({}, { Borrower: mockBorrower });
    expect(res).toEqual([
      {
        personalItem: mockBorrower,
        summaryItemType: CreditBureauFindingsType.PersonalInfo,
        summaryResult: "test1",
        summaryResultCode: "personal_item", //tu.queries.dispute.getResultCode(item.credit.result),
        summaryReason: "test2",
      },
    ]);
  });
});
