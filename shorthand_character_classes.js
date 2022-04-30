console.log('welcome man ');

// Character classes 
let regex = /\W nav/;   // word character -: _ or alphabet or number 
regex = /\W+d1a/;       // \w + means one or more characters 
regex = /\Wman/          // non word character 
regex = /\W+man/        //  \W + means more than one Non Word character .
regex = /\d66/;           // \d means digit 
regex = /number \d+/      // \d+ means more than one digit
regex = /\D6666/;          // \D means non digit 
regex = /\D+666/;           // \D+ means more than one non digit
regex = /\sman number/;      // \s match whitespace character
regex = /\s+man number/;      // \s+ matches more than one or more whitespace character
regex = /\S man number/;      // Match non whitespace character 
regex = /\S+ man number/;      // Match one ormore than one non whitespace character . 
regex = /ran\b/;                     // Word boundry
// str = "pranav6 man number 66wow66"; 

// Assertions 
regex = /p(?=y)/;
regex = /p(?!a)/;
str = "pranav6 man number 66wow66"; 

let result = regex.exec(str);
console.log("The result from exec is ",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`)
}
