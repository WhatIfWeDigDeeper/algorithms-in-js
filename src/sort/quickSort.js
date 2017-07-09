import { head, tail } from '../util';

const quickSort = (ls) => {
  if (ls.length <= 1) {
    // base case, arrays with 0 or 1 element are already "sorted"
    return ls;
  }
  const pivot = head(ls);
  const xs = tail(ls);
  return quickSort(xs.filter(x => x <= pivot))
          .concat([pivot])
          .concat(quickSort(xs.filter(y => y > pivot)));
};

export default quickSort;

