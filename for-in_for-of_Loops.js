console.log('welcome pk ');

let people = ["Pranav","Ajay","Sanjay","Vinay"];

//  **********For-in Loop**********

// Traditional for loop (Ancient time ka for loop )

// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// ITERATING AN OBJECT 
obj = {
    name : "Pranav",
    language: "JavaScript",
    Hobbies : "Running",
}
// console.log(obj);

// iterating an Object using Traditional for loop 
// for (let index = 0; index < object.keys(obj).length; index++) {
//     const element = obj[object.keys(obj)[index]];
    
// }


// Iterating for-in Loop 
for(let key in obj){
    console.log(obj[key]);
}

// We can use for in with strings to loop through all the characters.
mystring = "This is my string ";
for(let char in mystring){
    console.log(mystring[char]);
}

// *********For-of Loop ********
console.log("For of Loop start from here ");
people = ["Pranav","Ajay","Sanjay","Vinay"];

for(let name of people){
    console.log(name);
}

for(let name of mystring){
    console.log(name);
}