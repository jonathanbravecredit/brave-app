import { DecodePipe } from "./decode.pipe";
import * as he from "he";

describe("DecodePipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new DecodePipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run decode on transform", () => {
    let spy = spyOn(he, "decode");
    spy.and.returnValue("");
    pipe.transform("");
    expect(spy).toHaveBeenCalled();
  });
});
