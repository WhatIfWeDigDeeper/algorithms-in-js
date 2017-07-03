import { head, tail, take, skip } from '../util';

export const Node = class {
  constructor(key, val) {
    this.key = Object.freeze(key);
    this.value = Object.freeze(val);
    this.isLeaf = Object.freeze(false);
  }
  isLeaf() {
    return this.isLeaf;
  }
};

export const Leaf = class {
  constructor() {
    this.isLeafFlag = Object.freeze(true);
  }
  isLeaf() {
    return this.isLeafFlag;
  }
};

const leaf = new Leaf();

class Branch {
  constructor(node, left = leaf, right = leaf) {
    this.treeNode = Object.freeze(node);
    this.leftBranch = Object.freeze(left);
    this.rightBranch = Object.freeze(right);
    this.isLeafBranch = Object.freeze(false);
  }
  node() {
    return this.treeNode;
  }
  left() {
    return this.leftBranch;
  }
  right() {
    return this.rightBranch;
  }
  isLeaf() {
    return this.isLeafBranch;
  }
}

export const buildTree = (list) => {
  if (list.length === 0) {
    console.log('leaf');
    return new Leaf();
  }
  console.log(`list: ${list}`);
  const x = head(list);
  console.log(`x: ${x}`);
  const xs = tail(list);
  console.log(`xs: ${xs}`);
  const k = Math.floor(xs.length / 2);
  console.log(`k: ${k}`);
  const first = take(k, xs);
  console.log(`first: ${first}`);
  const last = skip(k, xs);
  console.log(`last: ${last}`);
  return new Branch(new Node(x, x), buildTree(first), buildTree(last));
};

export const traverse = (branch) => {
  if (branch.isLeaf()) {
    return [];
  }
  return [].concat(branch.node()).concat(traverse(branch.left())).concat(traverse(branch.right()));
};

export const traverseAcc = (branch, acc = []) => {
  if (branch.isLeaf()) {
    return acc;
  }
  return [].concat(branch.node())
    .concat(traverseAcc(branch.left(), traverseAcc(branch.right(), acc)));
};

export default Branch;
