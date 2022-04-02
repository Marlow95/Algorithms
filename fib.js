function fib(n){
  if(n <= 2){
    return 0
  }
  return fib(n -1) + fib(n -2)
}
//O(2^n) time complexity
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(20))

module.exports = fib
