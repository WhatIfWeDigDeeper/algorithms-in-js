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
}

export default Branch;
