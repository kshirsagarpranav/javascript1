console.log('welcome');

let regex = /pranav/;

// lets look into some metacharacters symbols 
regex = /^p/  // ^ means expression starts will match if string starts with 
regex = /av$/  // $ at end of string means  string ends with 
regex = /p.anav/;  // Dot(.)  means  matches any one character .
regex = /p*anav/;  // Star(*) matches  any 0 or more character .  
regex = /pr?ana?v/  // ? after character means that character  is optional .
regex = /p\*anav/          //

let str = "pranav is Best Boy and pranav is from Pune";
let result = regex.exec(str);
console.log("The result from exec is ",result);
if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`)
}




// These are conditions for metacharacters
 
//  lets look into some metacharacters symbols 
// regex = /^p/  // ^ means expression starts will match if string starts with 
// regex = /av$/  // $ at end of string means  string ends with 
// regex = /p.anav/;  // Dot(.)  means  matches any one character .
// regex = /p*anav/;  // Star(*) matches  any 0 or more character .  
// regex = /pr?ana?v/  // ? after character means that character  is optional .
// regex = /p\*anav/          //  \* This is used to show we do't want to use * . 