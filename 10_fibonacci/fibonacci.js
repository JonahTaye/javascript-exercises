const fibonacci = function(n) {
    let fibonacciSequence = [0, 1]

    if (n < 0) return "OOPS"

    while (fibonacciSequence.length <= n) {
        fibonacciSequence.push(fibonacciSequence.at(-2) + fibonacciSequence.at(-1))
    }
    return fibonacciSequence[n]
};
console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
