const fibonacci = (x, acc = 1) => {
  if (x <= 1) return acc;
  return fibonacci(x - 1, x * acc);
};

export default fibonacci;
