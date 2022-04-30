console.log('welcome pk ');

// Symbols 
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
console.log('Symbol is ',sym1);
console.log('Type of Symbol is ',typeof sym1);

console.log(sym1 == sym2);

const a = "This is ";
const b = "This is ";

console.log(a == b);
console.log(null == null);
console.log(undefined == undefined);

const key1 = Symbol('identifier for key1');
const key2 = Symbol('identifier for key2');

myobj = {};
myobj[key1] = "Pranav";
myobj[key2] = "Arnav";
myobj["name"] = "Good Codder";

console.log(myobj);
console.log(myobj[key1]);
console.log(myobj[key2]);

console.log(myobj.key1) // ##ALERT##  cannot do this to get Pranav because it is same as myobj["Key1"]

// Symbol are ignored in for-in Loop
for(key in myobj){
    console.log(key,myobj[key]);
}

console.log(JSON.stringify(myobj));

// New primitive so symbols are used 