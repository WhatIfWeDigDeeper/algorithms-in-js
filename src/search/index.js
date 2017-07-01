export const binarySearch = (list, item, compareFn) => {
  let low = 0;
  let high = list.length -1;
  let mid;
  let compareResult;

  // console.log(`find ${item}`);
  // console.log(`high start: ${high}`);
  while (low <= high) {
    mid = Math.floor(low + (high - low)/2);
    // console.log(`mid: ${mid}, list[mid]: ${list[mid]}`);
    compareResult = compareFn(item, list[mid]);
    // console.log(`compareResult: ${compareResult}`);
    if (compareResult === 0) {
      return mid;
    }
    if (compareResult > 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    // console.log(`high: ${high}`);
    // console.log(`low: ${low}`);
  }
  return null;
};

export const binarySearchRecursive = (list, item, compareFn, low=0, high=Infinity) => {
  if (high === Infinity) {
    high = list.length -1;
  }
  if (low > high) {
    return null;
  }
  const mid = Math.floor(low + (high - low)/2);
  const compareResult = compareFn(item, list[mid]);
  if (compareResult === 0) {
    return mid;
  }
  return (compareResult > 0)
    ? binarySearchRecursive(list, item, compareFn, mid + 1, high)
    : binarySearchRecursive(list, item, compareFn, low, mid - 1)
}
