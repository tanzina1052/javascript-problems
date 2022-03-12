// Swap Variable, swap without temp, destructuring
// Swap with temp
let a = 7;
let b = 5;
// console.log("Before swap: a = ", a, ", b = ", b);

let temp = a;
a = b;
b = temp;
// console.log("After swap: a = ", a, ", b = ", b);

// swap with mathematical operators
let x = 5;
let y = 7;
x = x + y;
y = x - y;
x = x - y;

// console.log("After swap: x = ", x, ", y = ", y);

//Swap With destructuring
let p = 7;
let q = 5;
console.log(p, q);
[p, q] = [q, p];
console.log("After swap: p = ", p, ", q = ", q);


