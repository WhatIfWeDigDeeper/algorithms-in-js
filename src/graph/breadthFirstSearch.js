// const breadthFirstSearchOriginal = (graph, predicate, name) => {
//   let searchQueue = [];
//   searchQueue = searchQueue.concat(graph[name]);
//   // This array is how you keep track of which people you've searched before.
//   const searched = [];
//   while (searchQueue.length) {
//     let item = searchQueue.shift();
//     // Only search this item if you haven't already searched them
//     if (searched.indexOf(item) === -1) {
//       if (predicate(item)) {
//         return item;
//       } else {
//         searchQueue = searchQueue.concat(graph[item]);
//         // Marks this item as searched
//         searched.push(item);
//       }
//     }
//   }
//   return null;
// }

const breadthFirstSearch = (graph, predicate, name) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = new Set();
  while (searchQueue.length) {
    const head = searchQueue.shift();
    // Only search this head if you haven't already searched them
    // eslint-disable-next-line no-continue
    if (searched.has(head)) continue;

    if (predicate(head)) {
      return head;
    }

    searchQueue = searchQueue.concat(graph[head]);
    // Marks this head as searched
    searched.add(head);
  }
  return null;
};

const breadthSearchInternal = (graph, searchQueue, predicate, searched) => {
  if (searchQueue.length === 0) {
    return null;
  }
  const head = searchQueue.shift();
  // Only search this head if you haven't already searched them
  if (searched.has(head)) {
    return breadthSearchInternal(graph, searchQueue, predicate, searched);
  }
  if (predicate(head)) {
    return head;
  }
  const newSearchQueue = searchQueue.concat(graph[head]);
  // Marks this head as searched
  searched.add(head);
  return breadthSearchInternal(graph, newSearchQueue, predicate, searched);
};

export const breadthFirstSearchRecursive = (graph, predicate, name) => {
  const searched = new Set();
  const searchQueue = [].concat(graph[name]);
  return breadthSearchInternal(graph, searchQueue, predicate, searched);
};

export default breadthFirstSearch;
