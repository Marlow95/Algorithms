/*

class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}



Visual Example of My Binary Tree
                          70
                        /    \
                       30    60
                      /  \   / \
                    10   20 40 50


const root = new Node(70)

const child1 = new Node(30)
const leaf1 = new Node(10)
const leaf2 = new Node(20)

const child2 = new Node(60)
const leaf3 = new Node(40)
const leaf4 = new Node(50)

root.left = child1
root.right = child2

child1.left = leaf1
child1.right = leaf2

child2.left = leaf3
child2.right = leaf4

*/

function depthValues(root){
  if (root === null) return [];
  
  const leftValues = depthValues(root.left);
  const rightValues = depthValues(root.right);
  return [ root.val, ...leftValues, ...rightValues ];
}

module.exports = depthValues;