import { replicate } from '../util';

const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciM = (n, m) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (m[n] !== -1) {
    return m[n];
  }
  const memo = Array.from(m);
  memo[n] = fibonacciM(n - 1, memo) + fibonacciM(n - 2, memo);
  return memo[n];
};

export const fibonacciMemo = n => (
  fibonacciM(n, replicate(-1, n + 1))
);

export default fibonacci;

