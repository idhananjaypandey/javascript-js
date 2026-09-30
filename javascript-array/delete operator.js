// 4. JavaScript Array delete Operator
// The delete operator is used to delete the given value which can be an object, array, or anything.

let emp = { 
    firstName: "Riya", 
    lastName: "Kaur", 
    salary: 40000
} 

console.log(delete emp.salary); 
console.log(emp);

/* output:

true
 
{"firstName":"Riya","lastName":"Kaur"}


*/