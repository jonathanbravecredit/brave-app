import { AccountNumberMaskPipe } from './account-number-mask.pipe';

describe('AccountNumberMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new AccountNumberMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
