// The flat() method creates a new array by flattening nested arrays to the specified depth. Its default depth is 1.

let arr = [1, [2, [3, 4]]];
console.log(arr.flat(2));

// Output: [1, 2, 3, 4]