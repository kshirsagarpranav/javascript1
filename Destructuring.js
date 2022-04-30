console.log('welcome');

// Destructing in JavaScript

let a,b;
[a,b] = [2,4];
console.log(a,b);

[a,b,c,...d] = [1,2,3,4,5,6,7,8];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

({a,b,c,...d} = {a: 21,b:98,c:23,d:20,e:1})
console.log(a,b,c,d);

const fruits = ['Apple','Mango','Watermelon'];
[a,b,c] = fruits;
console.log(a,b,c);

// Object Destructuring
const pranav = {
    City:"Pune",
    Year:"2002",
    start:function(){
        console.log('started');
    }
}
const {City ,Year} = pranav
console.log(City,Year);
