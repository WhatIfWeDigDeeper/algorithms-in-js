import { binarySearch, binarySearchRecursive } from './index';

describe('Search', () => {
  describe('binarySearch', () => {
    test('should find index for number array', () => {
      const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const item = 10;
      expect(binarySearch(list, item, (a, b) => a - b)).toBe(9);
    });

    test('should return null when not found', () => {
      const list = [1, 2, 3, 4, 5];
      const item = 6;
      expect(binarySearch(list, item, (a, b) => a - b)).toBeNull();
    });
  });

  describe('binarySearchRecursive', () => {
    test('should find index for number array', () => {
      const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const item = 10;
      expect(binarySearchRecursive(list, item, (a, b) => a - b)).toBe(9);
    });

    test('should return null when not found', () => {
      const list = [1, 2, 3, 4, 5];
      const item = 6;
      expect(binarySearchRecursive(list, item, (a, b) => a - b)).toBeNull();
    });

    test('should return null when not found', () => {
      const list = [];
      const item = 6;
      expect(binarySearchRecursive(list, item, (a, b) => a - b)).toBeNull();
    });
  });
});
