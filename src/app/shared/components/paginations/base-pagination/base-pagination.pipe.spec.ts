import { BasePaginationPipe } from './base-pagination.pipe';

describe('BasePaginationPipe', () => {
  it('create an instance', () => {
    const pipe = new BasePaginationPipe();
    expect(pipe).toBeTruthy();
  });
});
