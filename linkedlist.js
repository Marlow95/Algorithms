/*

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const a = new Node(12)
const b = new Node(45)
const c = new Node(67)
const d = new Node(27)

a.next = b
b.next = c
c.next = d 

*/

function printValues(head){
    let curr = head
    while(curr !== null){
        console.log(curr.val)
        curr = curr.next
    }
}

module.exports = printValues