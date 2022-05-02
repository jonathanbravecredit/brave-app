import { SsnMaskPipe } from './ssn-mask.pipe';

describe('SsnMaskPipe', () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new SsnMaskPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return undefined on transform if no value", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual(undefined);
  });

  it("should return expected on transform if value", () => {
    let res = pipe.transform('123-45-6789');
    expect(res).toEqual('***-**-6789');
  });
});
