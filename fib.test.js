const fib = require("./fib")

test('Check the sum of the fibonacci sequence', () => {
    expect(fib(1)).toBe(1)
})

test('Check the sum of the fibonacci sequence', () => {
    expect(fib(9)).toBe(34)
})