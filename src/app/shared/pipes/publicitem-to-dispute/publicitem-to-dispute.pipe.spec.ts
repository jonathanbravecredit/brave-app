import { IPublicPartition } from "@shared/interfaces";
import { PublicitemToDisputePipe } from "./publicitem-to-dispute.pipe";

describe("PublicitemToDisputePipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new PublicitemToDisputePipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return undefined on transform if no publicItem", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual(undefined);
  });

  it("should run mapping on transform", () => {
    let spy = spyOn(pipe, "mapping");
    pipe.transform({} as IPublicPartition);
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
});
