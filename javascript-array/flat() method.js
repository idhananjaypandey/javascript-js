/*

6. JavaScript Array flat() Method
The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

*/

const a1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
const a2 = a1.flat(Infinity);
console.log(a2);


/* Output:

[ '1', '2', '3', '4', '5', '6', '7' ]

*/