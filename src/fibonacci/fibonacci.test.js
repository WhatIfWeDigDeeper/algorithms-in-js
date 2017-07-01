import fibonacci from '../fibonacci';

describe('fibonacci', () => {
  test('5 should = 120', () => {
    expect(fibonacci(5)).toEqual(120);
  });

  test('0 should equal 1', () => {
    expect(fibonacci(0)).toEqual(1);
  });
});
