import { AccountNumberMaskPipe } from "./account-number-mask.pipe";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";

describe("AccountNumberMaskPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new AccountNumberMaskPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("it should return tu.bcMissing if value is undefined on transform", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual(tu.bcMissing);
  });

  it("it should return tu.bcMissing if value is '' on transform", () => {
    let res = pipe.transform("");
    expect(res).toEqual(tu.bcMissing);
  });

  it("it should return tu.bcMissing if value.leangth is 8 on transform", () => {
    let res = pipe.transform("12345678");
    expect(res).toEqual('1234****');
  });

  it("it should return tu.bcMissing if value.leangth is 4 on transform", () => {
    let res = pipe.transform("1234");
    expect(res).toEqual('12**');
  });

  it("it should return tu.bcMissing if value.leangth is 4 on transform", () => {
    let res = pipe.transform("1");
    expect(res).toEqual('1');
  });
});
