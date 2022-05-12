import { IMergeReport } from "@bravecredit/brave-sdk";
import {
  IPublicPartition,
  ITrueLinkCreditReportType,
} from "@shared/interfaces";
import { MergereportToPublicitemDetailsPipe } from "./mergereport-to-publicitems.pipe";

describe("MergereportToPublicitemDetailsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new MergereportToPublicitemDetailsPipe();
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
        PulblicRecordPartition: [{}] as IPublicPartition[],
      } as ITrueLinkCreditReportType,
    } as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });

  it("should return expected on mapping", () => {
    let res = pipe.mapping({} as IPublicPartition);
    expect(res).toEqual({
      publicPartition: Object({}),
      docketNumber: undefined,
      courtName: undefined,
      courtLocation: undefined,
      dateFiled: undefined,
      dateUpdated: undefined,
      publicItemType: undefined,
      expirationDate: undefined,
    });
  });
});
