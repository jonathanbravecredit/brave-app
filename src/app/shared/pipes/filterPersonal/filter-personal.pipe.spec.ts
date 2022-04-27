import { IPersonalItemsDetailsConfig } from "@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces";
import { FilterPersonalPipe } from "./filter-personal.pipe";

describe("FilterPersonalPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new FilterPersonalPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return [] on transform if no personal", () => {
    let res = pipe.transform(undefined, () => {});
    expect(res).toEqual([]);
  });

  it("should return expected on transform if no personal and cb returns 1", () => {
    let res = pipe.transform(
      [{ test: "test" } as unknown as IPersonalItemsDetailsConfig],
      (x: any) => {
        return 1;
      }
    );
    expect(res).toEqual([{ test: "test" }]);
  });

  it("should return expected on transform if no personal and cb returns 0", () => {
    let res = pipe.transform(
      [{ test: "test" } as unknown as IPersonalItemsDetailsConfig],
      (x: any) => {
        return 0;
      }
    );
    expect(res).toEqual([]);
  });
});
