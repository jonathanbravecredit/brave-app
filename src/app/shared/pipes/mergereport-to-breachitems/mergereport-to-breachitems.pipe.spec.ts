import { MergereportToBreachitemsPipe } from "./mergereport-to-breachitems.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import { IMergeReport } from "@bravecredit/brave-sdk";

describe("MergereportToBreachitemsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new MergereportToBreachitemsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run listDataBreaches on transform", () => {
    let spy = spyOn(tu.queries.report, "listDataBreaches");
    pipe.transform({} as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });
});
