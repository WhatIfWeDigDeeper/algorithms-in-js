import quickSort from './index';

describe('quickSort', () => {
  test('quick', () => {
    expect(
      quickSort([3, 4, 2])).toEqual([2, 3, 4]);
  });
});
