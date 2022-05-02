import { ITradeLinePartition } from "@shared/interfaces";
import { FilterTradelinesPipe } from "./filter-tradelines.pipe";

describe("FilterTradelinesPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new FilterTradelinesPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return expected on transform if cb returns 0", () => {
    let res = pipe.transform(
      [{ test: "test" } as unknown as ITradeLinePartition],
      (x: any) => {
        x.test = "test1";
        return 1;
      }
    );
    expect(res).toEqual([{ test: 'test1' }]);
  });

  it("should return expected on transform if cb returns 0", () => {
    let res = pipe.transform(
      [{ test: "test" } as unknown as ITradeLinePartition],
      (x: any) => {
        x.test = "test1";
        return 0;
      }
    );
    expect(res).toEqual([]);
  });
});
