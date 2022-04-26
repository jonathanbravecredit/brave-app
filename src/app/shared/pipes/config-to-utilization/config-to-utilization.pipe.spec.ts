import { ICreditUtilization } from "@views/dashboard/credit-utilization/components/credit-utilization-card/interfaces";
import { ConfigToUtilizationPipe } from "./config-to-utilization.pipe";

describe("ConfigToUtilizationPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new ConfigToUtilizationPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return undefined if value is undefined on transform", () => {
    let res = pipe.transform(null);
    expect(res).toBeUndefined();
  });

  it("should return expect if value is a ICreditUtilization on transform", () => {
    let mock = {
      creditorName: "test1",
      accountName: "test2",
      currentBalance: "test3",
      creditLimit: "test4",
      openClosed: "test5",
    } as ICreditUtilization;
    let res = pipe.transform(mock);
    expect(res).toEqual({
      config: mock,
      creditorName: "test1",
      accountName: "test1",
      currentBalance: "test3",
      creditLimit: "test4",
      openClosed: "test5",
    });
  });
});
