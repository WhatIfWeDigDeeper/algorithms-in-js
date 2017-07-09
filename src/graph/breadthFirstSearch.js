import { head, tail, isEmpty } from '../util';

const breadthFirstSearch = (graph, predicate, name) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = new Set();
  while (searchQueue.length) {
    const first = searchQueue.shift();
    // Only search this first if you haven't already searched them
    // eslint-disable-next-line no-continue
    if (searched.has(first)) continue;

    if (predicate(first)) {
      return first;
    }

    searchQueue = searchQueue.concat(graph[first]);
    // Marks this first as searched
    searched.add(first);
  }
  return null;
};

const bfSearchRecursive = (graph, predicate, searchQ, seen) => {
  if (isEmpty(searchQ)) {
    return null;
  }
  const x = head(searchQ);
  if (predicate(x)) {
    return x;
  }
  const searchQTail = tail(searchQ);
  if (seen.has(x)) {
    return bfSearchRecursive(graph, predicate, searchQTail, seen);
  }
  seen.add(x);
  return bfSearchRecursive(graph, predicate, graph[x].concat(searchQTail), seen);
};

export const breadthFirstSearchRecursive = (graph, predicate, node) => (
  bfSearchRecursive(graph, predicate, graph[node], new Set())
);


export default breadthFirstSearch;
