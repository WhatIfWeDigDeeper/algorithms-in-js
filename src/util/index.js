/* eslint-disable no-confusing-arrow */

export const head = xs => (xs && xs.length > 0) ? xs[0] : [];

export const tail = xs => (xs && xs.length > 1) ? xs.slice(1) : [];

export const range = (end, start = 1, xs = []) => (
  (xs.length === end)
    ? xs
    : range(end, start + 1, xs.concat([start]))
);

export const replicate = (val, n) => (new Array(n).fill(val));
