// data types in js
// 1) Primitive dataType - strings , numbers , Boolean , Null, unDefined , Symbol.
// 2) Reference Data Type - Array,Object Literals , Functions , Dates 

// 1) Primitive dataTypes
// i)String 
let name = "Pranav";
console.log("My string is " + name);
console.log("Data Type is " + (typeof name));

// ii) Numbers
let marks = 99;
console.log("Data Type is " + (typeof marks));

// iii) Boolean
let isDriver = true;
console.log("Data Type is "+ (typeof isDriver));

// iv) NULL
let nullVar = null;
console.log("Data Type is "+ (typeof nullVar));

// v)  undefined 
let undef = undefined;
console.log("Data Type is " + (typeof undef));

// Reference Data Types 
// 1) Arrays 
myarr = [1,3,5,7];
console.log("Data Type is "+ (typeof myarr));

// object Literals
let stmarks = {
    pranav : 99,
    Arnav : 100,
    Sanjay : 88
}
console.log(stmarks);

function findname() {
    
}
console.log(typeof findname);
let date = new Date();
console.log(typeof date);