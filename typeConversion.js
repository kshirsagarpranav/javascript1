// type conversion and type coersion
console.log('Welcome to typeConversion');
let myVar;
myVar = String(88);
// console.log(myVar,(typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
// console.log(date,typeof(date));

let arr = String([2,4,6,8]);
// console.log(arr.length,(typeof arr));

let i = 9;
console.log(i.toString());

let stri = Number = "2255";
console.log(stri,(typeof stri));

let number = parseFloat('50.578');
// console.log(stri,(typeof number));


// Type Coercion 
let mtstr = '356';
let mynum = 9;
console.log(mystr + mynum);