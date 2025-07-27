// length

var arr = [1,2,3,4,5];
console.log(arr.length);

// push - add

arr.push(6);
arr.push("Qualquer coisa");
console.log(arr);

// pop

arr.pop();
console.log(arr);

// unshift

arr.unshift(0);
arr.unshift("Teste");
console.log(arr);

// shift

arr.shift();
console.log(arr);

// last element

console.log(arr[arr.length - 1]);

// isArray

console.log(Array.isArray(5));
console.log(Array.isArray(arr));