
// const findLowestCostNode = (costs, processed) => {
//   let lowest_cost = Infinity;
//   let lowest_cost_node = null;
//
//   // Go through each node
//   for (let node in costs) {
//     let cost = costs[node];
//     // If it's the lowest cost so far and hasn't been processed yet...
//     if (cost < lowest_cost && (processed.indexOf(node) === -1)) {
//       // ... set it as the new lowest-cost node.
//       lowest_cost = cost;
//       lowest_cost_node = node;
//     }
//   }
//   return lowest_cost_node;
// }
//
// const findLowestCostPath = (graph, costs, parents) => {
//   let processed = [];
//   let node = findLowestCostNode(costs, processed);
//
//   while (node !== null) {
//     let cost = costs[node];
//     // Go through all the neighbors of this node
//     let neighbors = graph[node];
//     Object.keys(neighbors).forEach(function(n) {
//       let new_cost = cost + neighbors[n];
//       // If it's cheaper to get to this neighbor by going through this node
//       if (costs[n] > new_cost) {
//         // ... update the cost for this node
//         costs[n] = new_cost;
//         // This node becomes the new parent for this neighbor.
//         parents[n] = node;
//       }
//     });
//
//     // Mark the node as processed
//     processed = processed.concat(node);
//
//     // Find the next node to process, and loop
//     node = findLowestCostNode(costs, processed);
//   }
//   console.log("Cost from the start to each node:");
//   console.log(costs); // { a: 5, b: 2, fin: 6 }
//   console.log(parents);
//   return costs;
// };

const findLowestCostNode = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  // Go through each node
  for (let node in costs) {
    let cost = costs[node];
    // If it's the lowest cost so far and hasn't been processed yet...
    if (cost < lowestCost && (!processed.has(node)) ) {
      // ... set it as the new lowest-cost node.
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

const findLowestCostPath = (graph, costs, parents) => {
  let processed = new Set();
  let node = findLowestCostNode(costs, processed);

  while (node !== null) {
    let cost = costs[node];
    // Go through all the neighbors of this node
    let neighbors = graph[node];
    Object.keys(neighbors).forEach(function(n) {
      let new_cost = cost + neighbors[n];
      // If it's cheaper to get to this neighbor by going through this node
      if (costs[n] > new_cost) {
        // ... update the cost for this node
        costs[n] = new_cost;
        // This node becomes the new parent for this neighbor.
        parents[n] = node;
      }
    });

    // Mark the node as processed
    processed.add(node);

    // Find the next node to process, and loop
    node = findLowestCostNode(costs, processed);
  }
  return costs;
};

export default findLowestCostPath;
