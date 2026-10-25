// The flatMap() method maps each element and flattens the result by one level.

let arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2]));

// Output: [1, 2, 2, 4, 3, 6]