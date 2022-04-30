console.log("welcome to date and time ");

let today = new Date();
let otherdate = new Date('06-08-2002 14:26');
// console.log(typeof today);

console.log(otherdate);

let a;
a = otherdate.getDay();
a = otherdate.getMinutes();
a = otherdate.getTime();
a = otherdate.getMonth();
console.log(a);
otherdate.setDate(15);
otherdate.setMonth(Janurary);
otherdate.setSeconds(30);
console.log(otherdate);
