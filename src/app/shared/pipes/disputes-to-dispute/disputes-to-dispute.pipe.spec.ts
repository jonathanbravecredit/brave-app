import { DisputesToDisputePipe } from "./disputes-to-dispute.pipe";

describe("DisputesToDisputePipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new DisputesToDisputePipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return Undefined on transform if no dispute", () => {
    let res = pipe.transform(null, "");
    expect(res).toBeUndefined();
  });

  it("should return expected on transform", () => {
    let res = pipe.transform([{ disputeId: "1" }, { disputeId: "2" }], "2");
    expect(res).toEqual({ disputeId: "2" });
  });
});
