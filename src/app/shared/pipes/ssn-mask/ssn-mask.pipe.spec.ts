import { SsnMaskPipe } from './ssn-mask.pipe';

describe('SsnMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new SsnMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
