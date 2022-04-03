const depthValues = require('./binaryTree')

test('print depth first values', () => {
    class Node {
        constructor(val){
            this.val = val
            this.left = null
            this.right = null
        }
    }
    
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

    expect(depthValues(root)).toEqual([70, 30, 10, 20, 60, 40, 50])
})