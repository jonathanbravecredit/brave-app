import { IMergeReport } from "@bravecredit/brave-sdk";
import { IBorrower, ITrueLinkCreditReportType } from "@shared/interfaces";
import { MergereportToPersonalitemsPipe } from "./mergereport-to-personalitems.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("MergereportToPersonalitemsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new MergereportToPersonalitemsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return [] on transform if no report", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual([]);
  });

  it("should return [] on transform if no publicrecords", () => {
    let res = pipe.transform({} as IMergeReport);
    expect(res).toEqual([]);
  });

  it("should run mapping on transform", () => {
    let spy = spyOn(pipe, "mapping");
    pipe.transform({
      TrueLinkCreditReportType: {
        Borrower: {} as IBorrower,
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should run mapBorrowerToDetails on mapping", () => {
    let spy = spyOn(tu.mappers, "mapBorrowerToDetails");
    pipe.mapping({} as IBorrower);
    expect(spy).toHaveBeenCalled();
  });

  it("should return expected on flattenItems", () => {
    let res = pipe.flattenItems(["test1", "test2"]);
    expect(res).toEqual(`\ntest1\ntest2`);
  });
});
