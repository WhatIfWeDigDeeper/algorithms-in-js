// import findLowestCostPath from './dijkstrasWeightedGraph';
//
// describe('Dijkstras Weighted Graph', () => {
//   // the graph
//   const graph = {};
//   graph.start = {};
//   graph.start.a = 6;
//   graph.start.b = 2;
//
//   graph.a = {};
//   graph.a.fin = 1;
//
//   graph.b = {};
//   graph.b.a = 3;
//   graph.b.fin = 5;
//
//   graph.fin = {};
//
//   // The costs table
//   const costs = {};
//   costs.a = 6;
//   costs.b = 2;
//   costs.fin = Infinity;
//
//   // the parents table
//   const parents = {};
//   parents.a = 'start';
//   parents.b = 'start';
//   parents.fin = null;
//
//   test('Dijkstras', () => {
//     expect(findLowestCostPath(graph, costs, parents).fin)
//       .toBe(6);
//   });
// });
