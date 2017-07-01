import { head, tail } from '../util';

export const factorial = n => (
  n === 1
    ? 1
    : n * factorial(n - 1)
);

export const tailFactorial = (n, current = 1) => (
  n === 1
    ? current
    : tailFactorial(n - 1, current * n)
);

export const tailSum = (xs, acc = 0) => (
  xs.length === 0
    ? acc
    : tailSum(tail(xs), acc + head(xs))
);
