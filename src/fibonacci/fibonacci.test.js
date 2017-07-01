import fibonacci from '../fibonacci';

describe('fibonacci', () => {
  test('7th fibonacci number should be 13', () => {
    expect(fibonacci(7)).toEqual(13);
  });
  test('1 should equal 1', () => {
    expect(fibonacci(1)).toEqual(1);
  });
  test('0 should equal 0', () => {
    expect(fibonacci(0)).toEqual(0);
  });
});
