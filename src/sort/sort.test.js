import { quicksort } from './index';

describe('quicksort', () => {
  test('quick', () => {
    expect(
      quicksort([3, 4, 2])
    ).toEqual([2, 3, 4]);
  })
});
