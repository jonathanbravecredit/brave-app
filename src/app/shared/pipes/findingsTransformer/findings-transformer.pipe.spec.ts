import {
  FindingsConfigurations,
  FindingsTransformerPipe,
} from "./findings-transformer.pipe";

describe("FindingsTransformerPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new FindingsTransformerPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run showOnUpdated on transform if condition is ShowOnUpdated", () => {
    let spy = spyOn(pipe.cases, "showOnUpdated");
    pipe.transform([], FindingsConfigurations.ShowOnUpdated);
    expect(spy).toHaveBeenCalled();
  });

  it("should run showOnDeleted on transform if condition is ShowOnDeleted", () => {
    let spy = spyOn(pipe.cases, "showOnDeleted");
    pipe.transform([], FindingsConfigurations.ShowOnDeleted);
    expect(spy).toHaveBeenCalled();
  });

  it("should run showRatingsKey on transform if condition is ShowRatingsKey", () => {
    let spy = spyOn(pipe.cases, "showRatingsKey");
    pipe.transform([], FindingsConfigurations.ShowRatingsKey);
    expect(spy).toHaveBeenCalled();
  });

  it("should run showDetail on transform if condition is ShowDetail", () => {
    let spy = spyOn(pipe.cases, "showDetail");
    pipe.transform([], FindingsConfigurations.ShowDetail);
    expect(spy).toHaveBeenCalled();
  });

  it("should run isPopulated on transform if condition is IsPopulated", () => {
    let spy = spyOn(pipe.cases, "isPopulated");
    pipe.transform([], FindingsConfigurations.IsPopulated);
    expect(spy).toHaveBeenCalled();
  });
});
