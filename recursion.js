function recur(n){
    if(n <= 1){
        return 0
    }

    return n - 1
}
//O(n)
console.log(recur(1))
console.log(recur(2))
console.log(recur(10))
