function tail(xs) {
  return (!xs || xs.length === 0) ? [] : xs.slice(1);
}
// const tail = xs => (!xs || xs.length === 0) ? [] : xs.slice(1);

const head = xs => xs[0];

const quickSort = (xs) => {
  if (xs.length <= 1) {
    // base case, arrays with 0 or 1 element are already "sorted"
    return xs;
  }
  // recursive case
  const pivot = head(xs);
  // sub-array of all the elements less than the pivot
  const less = tail(xs).filter(x => x <= pivot);
  // sub-array of all the elements greater than the pivot
  const greater = tail(xs).filter(x => x > pivot);
  return quickSort(less).concat([pivot], quickSort(greater));
};

export default quickSort;

