function fib(n){
  if(n <= 1){
    return n
  }
  
  return fib(n -1) + fib(n -2)
}
//O(2^n) time complexity

module.exports = fib
