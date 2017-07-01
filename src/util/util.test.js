import { head, tail, range, replicate } from '../util';

describe('util', () => {
  describe('head', () => {
    test('single member array should return single', () => {
      expect(head(['a'])).toEqual('a');
    });
    test('empty array should return empty array', () => {
      expect(head([])).toEqual([]);
    });
  });
  describe('tail', () => {
    test('tail should return rest of array', () => {
      expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
    });
    test('empty array should return empty array', () => {
      expect(tail([])).toEqual([]);
    });
  });
  describe('range', () => {
    test('range should default to start at 1 and return range of numbers from 1 to end', () => {
      expect(range(4)).toEqual([1, 2, 3, 4]);
    });
    test('can specify min and max', () => {
      expect(range(4, 2)).toEqual([2, 3, 4, 5]);
    });
    test('0 should return empty array', () => {
      expect(range(0)).toEqual([]);
    });
  });
  describe('replicate', () => {
    test('replicate should replicate value n times', () => {
      expect(replicate('a', 3)).toEqual(['a', 'a', 'a']);
    });
  });
});
