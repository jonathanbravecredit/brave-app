import { DisputeToDisputeFindingPipe } from "./dispute-to-dispute-finding.pipe";

describe("DisputeToDisputeFindingPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new DisputeToDisputeFindingPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return Undefined on transform if no dispute", () => {
    let res = pipe.transform(null, undefined);
    expect(res).toBeUndefined();
  });

  it("should return Undefined on transform if no status", () => {
    let res = pipe.transform({}, undefined);
    expect(res).toEqual({});
  });

  it("should run mapOpenDispute on transform if status", () => {
    let spy = spyOn(pipe, "mapOpenDispute");
    pipe.transform({ disputeStatus: "opendispute" }, undefined);
    expect(spy).toHaveBeenCalled();
  });

  it("should run mapClosedDispute on transform if status", () => {
    let spy = spyOn(pipe, "mapClosedDispute");
    pipe.transform({ disputeStatus: "not opendispute" }, undefined);
    expect(spy).toHaveBeenCalled();
  });

  it("should return expected on transform if status and opendispute", () => {
    let res = pipe.transform({ disputeStatus: "opendispute" }, undefined);
    expect(res).toEqual({
      status: "open",
      reportCreatedAt: "--",
      fileIdentificationNumber: "--",
      estimatedCompletionDate: "--",
      totalDisputedItems: "--",
    });
  });

  it("should return expected on transform if status and not opendispute", () => {
    let res = pipe.transform({ disputeStatus: "not opendispute" }, undefined);
    expect(res).toEqual({
      status: "closed",
      reportCreatedAt: "--",
      fileIdentificationNumber: "undefined-undefined",
    });
  });
});
