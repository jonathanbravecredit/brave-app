import { IDispute } from "@shared/interfaces/disputes";
import { IDisputeHistorical } from "@views/dashboard/disputes/components/cards";
import { DisputesToDisputesOverviewPipe } from "./disputes-to-disputes-overview.pipe";

describe("DisputesToDisputesOverviewPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new DisputesToDisputesOverviewPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return expected on transform if no dispute", () => {
    let res = pipe.transform(null);
    expect(res).toEqual({ currentDispute: null, hasHistorical: false });
  });

  it("should run parseCurrentDisputeItems on transform if dispute", () => {
    let spy = spyOn(pipe, "parseCurrentDisputeItems");
    pipe.transform([{ disputeItems: JSON.stringify([{}]) } as IDispute, true]);
    expect(spy).toHaveBeenCalled();
  });

  it("should run parseCurrentDisputeItems on transform if dispute", () => {
    let spy = spyOn(pipe, "parseCurrentDisputeItems");
    spy.and.returnValue({} as IDisputeHistorical);
    pipe.transform([{ disputeItems: JSON.stringify([{}]) } as IDispute, true]);
    expect(spy).toHaveBeenCalled();
  });

  it("should return expected on transform if dispute", () => {
    let res = pipe.transform([
      { disputeItems: JSON.stringify([{}]) } as IDispute,
      true,
    ]);
    expect(res).toEqual({
      currentDispute: {
        dispute: Object({ disputeItems: "[{}]" }),
        creditorName: "--",
        status: "--",
        accountType: "--",
        dateSubmitted: "--",
        estCompletionDate: "--",
      },
      hasHistorical: true,
    });
  });

  it("should run mapDisputeItem on parseCurrentDisputeItems", () => {
    let spy = spyOn(pipe, "mapDisputeItem");
    spy.and.returnValue({} as IDisputeHistorical);
    pipe.parseCurrentDisputeItems(
      [true, { disputeItems: JSON.stringify([{}]) } as IDispute],
      []
    );
    expect(spy).toHaveBeenCalled();
  });
});
