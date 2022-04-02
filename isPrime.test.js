const isPrime = require('./isPrime')

test("Check if a number is a prime number", () => {
    expect(isPrime(2)).toBe(true)
})