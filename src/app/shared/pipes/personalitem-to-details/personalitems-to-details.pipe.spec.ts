import { PersonalitemsToDetailsPipe } from "./personalitems-to-details.pipe";
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { IBorrower } from "@shared/interfaces";

describe("PersonalitemsToDetailsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new PersonalitemsToDetailsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return undefined on transform if no personalItem", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual(undefined);
  });

  it("should run mapBorrowerToDetails on transform if personalItem", () => {
    let spy = spyOn(tu.mappers, 'mapBorrowerToDetails')
    pipe.transform({} as IBorrower);
    expect(spy).toHaveBeenCalled();
  });
});
