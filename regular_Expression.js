console.log('welcome !!!!');

let reg = /pranav/; // This is a regular expression literal in js 
// reg = /pranav/g; // g means global flag
// reg = /pranav/i; // i means case insensitive flag 
console.log(reg);
console.log(reg.source);

let s = "This is Wonderful pranav  and pranav is Best Badmintion Player ";
//  Functions to match expressions
// 1.exec() - This Function will return an Array for match or null for no match 
let result = reg.exec(s);
// console.log(result);  --> We can use multiple exec with global flag 

if(result){
let result = reg.exec(s);
console.log(result);
console.log(result.input);
console.log(result.index);
}


// 2. test() - Returns true or false 
let result2 = reg.test(s);
// console.log(result2);    //--> This will print true if the "reg" is there in the string "s";


// 3 . match() - It will Return an Array of results or null
// let result3 = reg.match(s);   // --> This is wrong 
let result3 = s.match(reg)
console.log(result3);

// 4 . Search() - Returns index of First Match else  -1
// let results4 = s.search(s) // --> This is wrong 
let result4 = s.search(reg);  // -->This is Correct 
console.log(result4);

// 5. replace () - Returns new Replace Strings with all the replacements [if no global flag is given , first match is replaced ].
let result5 = s.replace(reg,'ARNAV');
console.log(result5);