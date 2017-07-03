import Branch, { Node, buildTree, traverse, traverseAcc } from './branch';

describe('binary tree', () => {
  describe('Branch', () => {
    test('create Branch without left or right should insert Leaf nodes', () => {
      const branch = new Branch(new Node('key', 13));
      expect(branch.left().isLeaf()).toBeTruthy();
      expect(branch.right().isLeaf()).toBeTruthy();
      expect(branch.node().value).toEqual(13);
    });
    test('create Branch should create node', () => {
      const branch = new Branch(new Node('key', 13));
      expect(branch.node().value).toEqual(13);
    });
  });
  describe('buildTree', () => {
    test('create tree from list', () => {
      const tree = buildTree([1, 2, 3, 4]);
      console.log(tree);
      expect(tree.left().node().value).toEqual(2);
      console.log(traverse(tree));
      console.log(traverseAcc(tree));
    });
  });
});
