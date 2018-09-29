// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Recursive Solution
// Exponential Time Soltion: O(2^n) --> BAD

function memoize(func){
    const cache = {};
    // idk how many args this will receive
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = func.apply(this, args);
        cachce[args]= result;
        return result;
    }
}
function fib(n) {

    if(n< 2){
        return n;
    }
    return fib(n-1) + fib(n-2);
    
}
fib = memoize(slowFib);

// Iterative Solution
// O(n)
// function fib(n) {
//     // start with array of [0,1]
//     let results = [0,1];
//     for(i = 2 ; i <= n; i++  ){
//         let calcNumber = (results[i-1]+ results[i-2]);
//         results.push(calcNumber);
//     }
//     return results[results.length-1];
// }


module.exports = fib;
