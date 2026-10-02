/*
5. JavaScript Array concat() Method
The concat() method is used to concatenate two or more arrays and it gives the merged array.
*/

let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];

let newArr = a1.concat(a2, a3);
console.log(newArr);

/*
output:
[11, 12, 13, 14, 15, 16, 17, 18, 19]
*/