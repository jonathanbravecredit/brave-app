import { IDispute } from "@shared/interfaces/disputes";
import { IDisputeHistorical } from "@views/dashboard/disputes/components/cards";
import { DisputesToDisputesHistoricalPipe } from "./disputes-to-disputes-historical.pipe";

describe("DisputesToDisputesHistoricalPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new DisputesToDisputesHistoricalPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return Undefined on transform if no dispute", () => {
    let res = pipe.transform(null, "");
    expect(res).toEqual([]);
  });

  it("should run parseHistoricalDisputeItems on transform if dispute", () => {
    let spy = spyOn(pipe, "parseHistoricalDisputeItems");
    spy.and.returnValue({} as IDisputeHistorical);
    pipe.transform([true, { disputeItems: JSON.stringify([{}]) } as IDispute]);
    expect(spy).toHaveBeenCalled();
  });

  it("should return expected on transform if dispute", () => {
    let spy = spyOn(pipe, "parseHistoricalDisputeItems");
    spy.and.returnValue({} as IDisputeHistorical);
    let res = pipe.transform([
      true,
      { disputeItems: JSON.stringify([{}]) } as IDispute,
    ]);
    expect(res).toEqual([{}]);
  });

  it("should run mapHistoricalDisputeItem on parseHistoricalDisputeItems", () => {
    let spy = spyOn(pipe, "mapHistoricalDisputeItem");
    spy.and.returnValue({} as IDisputeHistorical);
    pipe.parseHistoricalDisputeItems([
      true,
      { disputeItems: JSON.stringify([{}]) } as IDispute,
    ]);
    expect(spy).toHaveBeenCalled();
  });
});
