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

// [1, 4], [3]
export const merge = (ls1, ls2) => {
  if (!isEmpty(ls1) && isEmpty(ls2)){
    return ls1;
  }
  if (isEmpty(ls1) && !isEmpty(ls2)){
    return ls2;
  }
  const x = head(ls1); // 1
  const xs = tail(ls1); // 4
  const y = head(ls2); // 3
  const ys = tail(ls2); //
  return (x > y) 
    ? [y].concat(merge(ls1, ys))
    : [x].concat(merge(xs, ls2));
}

// export default mergeSort;
