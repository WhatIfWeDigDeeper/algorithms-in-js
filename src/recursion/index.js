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

export const tailSum = (ary, acc = 0) => (
  ary.length === 0
    ? acc
    : tailSum(ary.slice(1), acc + ary[0])
);
