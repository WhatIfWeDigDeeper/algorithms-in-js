import { head, tail, isEmpty } from '../util';

export const split = (ary) => {
  if (isEmpty(ary)) {
    return { item1: [], item2: []};
  }
  const x = head(ary);
  const xs = tail(ary);
  if (isEmpty(xs)){
    return { item1: [x], item2: []};
  }
  const y = head(xs);
  const ys = tail(xs);
  const { item1, item2 } = split(ys);
  return { item1: [x].concat(item1), item2: [y].concat(item2)};
}

export const partition = (ary) => {
  if (isEmpty(ary)) {
    return { item1: [], item2: []};
  }
  return (ary.length === 1)
    ? { item1: ary, item2: []}
    : { item1: ary.slice(0, ary.length /2),
      item2: ary.slice(ary.length/2)};
}

export const merge = (ls1, ls2) => {
  if (!isEmpty(ls1) && isEmpty(ls2)){
    return ls1;
  }
  if (isEmpty(ls1) && !isEmpty(ls2)){
    return ls2;
  }
  const x = head(ls1);
  const xs = tail(ls1);
  const y = head(ls2);
  const ys = tail(ls2);
  return (x > y)
    ? [y].concat(merge(ls1, ys))
    : [x].concat(merge(xs, ls2));
}

const mergeSort = (ls) => {
  if (isEmpty(ls) || isEmpty(tail(ls))) {
    return ls;
  }
  const { item1, item2 } = split(ls);
  const ls1 = mergeSort(item1);
  const ls2 = mergeSort(item2);
  return merge(ls1, ls2);
}

export default mergeSort;
