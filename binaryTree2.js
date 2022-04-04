function breathValues(root){

    if(root === null) return [];
    
    let queue = [root]
    let values = []
    
    while(queue.length > 0){
      let node = queue.shift()
      values.push(node.val)
      
      if(node.left !== null) queue.push(node.left)
      if(node.right !== null) queue.push(node.right)
    }

  return values
}

//O(n) time complexity

module.exports = breathValues;