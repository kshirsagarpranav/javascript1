console.log('welcome pk ');


// Set stores unique values
const mySet = new Set();

// Adding values to set

mySet.add('this');
mySet.add('My name');
mySet.add(10);
mySet.add(true);
mySet.add(20);
console.log('The set looks like this now:',mySet);

// Use a Constructor to initialize the set .
let mySet2 = new Set([1,20,'this',true,{a:2,b:4}]);
console.log('New set',mySet2);

console.log(mySet.size) //Get the size of the set

console.log(mySet.has(10)); // Check wheather set has 10 or not 

console.log('Before removal',mySet.has(20));
mySet.delete(20);  // Remaove an Element from the set
console.log('After removal',mySet.has(20));


// Iterating a Set

// Iterating a Set in for-of Loop
for(let item of mySet){
    console.log('Item is :',item);
}
// Iterating a Set in forEach Loop
mySet.forEach((item)=>{
    console.log('Item is :',item);
})

