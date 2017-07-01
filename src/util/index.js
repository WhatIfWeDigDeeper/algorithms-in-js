/* eslint-disable no-confusing-arrow */

export const head = xs => (xs && xs.length > 0) ? xs[0] : [];

export const tail = xs => (xs && xs.length > 1) ? xs.slice(1) : [];

