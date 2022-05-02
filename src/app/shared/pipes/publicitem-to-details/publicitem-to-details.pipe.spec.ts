import { IPublicPartition } from "@shared/interfaces";
import { PublicitemToDetailsPipe } from "./publicitem-to-details.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("PublicitemToDetailsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new PublicitemToDetailsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return undefined on transform if no publicItem", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual(undefined);
  });

  it("should run mappingCreditBureau on transform if creditBureau", () => {
    let spy = spyOn(pipe, "mappingCreditBureau");
    pipe.transform({} as IPublicPartition, true);
    expect(spy).toHaveBeenCalled();
  });

  it("should run mapping on transform if not creditBureau", () => {
    let spy = spyOn(pipe, "mapping");
    pipe.transform({} as IPublicPartition, false);
    expect(spy).toHaveBeenCalled();
  });

  it("should return expected on mapping", () => {
    let res = pipe.mapping({} as IPublicPartition);
    expect(res).toEqual({
      publicPartition: {},
      docketNumber: "--",
      courtName: "--",
      courtLocation: "--",
      dateFiled: "--",
      dateUpdated: "--",
      publicItemType: "--",
      expirationDate: "--",
    });
  });

  it("should return expected on mappingCreditBureau", () => {
    let spy = spyOn(tu.parsers.dispute, "unparseSubscriber");
    spy.and.returnValue(["", "", ""]);
    let res = pipe.mapping({} as IPublicPartition);
    expect(res).toEqual({
      publicPartition: {},
      docketNumber: "--",
      courtName: "--",
      courtLocation: "--",
      dateFiled: "--",
      dateUpdated: "--",
      publicItemType: "--",
      expirationDate: "--",
    });
  });
});
