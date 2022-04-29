import { AccountStatusPipe } from "./account-status.pipe";

describe("AccountStatusPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new AccountStatusPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return null if value is undefined on transform", () => {
    let res = pipe.transform(undefined);
    expect(res).toBeNull();
  });

  it("should return #4BD269 if value is excellent on transform", () => {
    let res = pipe.transform("excellent");
    expect(res).toEqual("#4BD269");
  });

  it("should return #BBD904 if value is good on transform", () => {
    let res = pipe.transform("good");
    expect(res).toEqual("#BBD904");
  });

  it("should return #F59300 if value is fair on transform", () => {
    let res = pipe.transform("fair");
    expect(res).toEqual("#F59300");
  });

  it("should return #F56700 if value is poor on transform", () => {
    let res = pipe.transform("poor");
    expect(res).toEqual("#F56700");
  });

  it("should return #E93C25 if value is verypoor on transform", () => {
    let res = pipe.transform("verypoor");
    expect(res).toEqual("#E93C25");
  });

  it("should return #DADADA if value is closed on transform", () => {
    let res = pipe.transform("closed");
    expect(res).toEqual("#DADADA");
  });
});
