import { IMergeReport } from "@bravecredit/brave-sdk";
import { MergereportToSubscribersPipe } from "./mergereport-to-subscribers.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("MergereportToSubscribersPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new MergereportToSubscribersPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run listSubscribers on transform", () => {
    let spy = spyOn(tu.queries.report, "listSubscribers");
    pipe.transform({} as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });
});
