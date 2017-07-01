const tail = xs => (!xs || xs.length === 0) ? [] : xs.slice(1);

export const quicksort = (xs) => {
  if (xs.length < 2) {
    // base case, arrays with 0 or 1 element are already "sorted"
    return xs;
  }
   // recursive case
   let pivot = xs[0];
   // sub-array of all the elements less than the pivot
   let less = tail(xs).filter(x => x <= pivot);
   // sub-array of all the elements greater than the pivot
   let greater = tail(xs).filter(x => x > pivot);
   return quicksort(less).concat([pivot], quicksort(greater));
};
