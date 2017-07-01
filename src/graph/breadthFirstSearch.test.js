import breadthFirstSearch, { breadthFirstSearchRecursive } from './breadthFirstSearch';

describe('breadthFirstSearch', () => {
  function itemIsSeller(name) {
    return name[name.length - 1] === 'm';
  }

  const graph = {};
  graph.you = ['alice', 'bob', 'claire'];
  graph.bob = ['anuj', 'peggy'];
  graph.alice = ['peggy'];
  graph.claire = ['thom', 'jonny'];
  graph.anuj = [];
  graph.peggy = [];
  graph.thom = [];
  graph.jonny = [];

  test('breadthFirstSearch', () => {
    expect(
      breadthFirstSearch(graph, itemIsSeller, 'you'),
    ).toBe('thom');
  });

  test('breadthFirstSearchRecursive', () => {
    expect(
      breadthFirstSearchRecursive(graph, itemIsSeller, 'you'),
    ).toBe('thom');
  });
});
