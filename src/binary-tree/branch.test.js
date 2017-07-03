import Branch, { Node } from './branch';

describe('binary tree', () => {
  describe('constructor', () => {
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
});
