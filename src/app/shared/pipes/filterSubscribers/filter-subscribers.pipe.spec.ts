import { ISubscriber, ITradeLinePartition } from "@shared/interfaces";
import { IDispute } from "@shared/interfaces/disputes";
import { TransunionUtil } from "@shared/utils/transunion/transunion";
import { FilterSubscribersPipe } from "./filter-subscribers.pipe";

describe("FilterSubscribersPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new FilterSubscribersPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run getTradelineSubscriberByKey on transform if dispute", () => {
    let spy = spyOn(
      TransunionUtil.queries.report,
      "getTradelineSubscriberByKey"
    );
    pipe.transform([{} as ISubscriber], {} as ITradeLinePartition);
    expect(spy).toHaveBeenCalled();
  });
});
