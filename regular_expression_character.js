console.log('welcome man ');

// const regex = /^p/i;
// Characters Set - []
let regex = /p[a-z]anav/;   // can be any character from a to z 
regex = /p[abx]anav/;  // can be an a , b or x only 
regex = /p[^abx]anav/;  // cannot be any of a, b or x 
regex = /p[^abx]anav[xu]/; // cannot be any of a,b or x + can be an x or u.
regex = /p[a-zA-Z]anav[xXu0-9]/; // we can have as many character set as we want .

// Quantifiers - we use {} 
regex = /pra{2}v/ // a can occur exactly 2 times 
regex = /pra{0,2}v/  // a can occur exactly 0 to 2 (0 or 1 or 2) times 
str = "prapra mn";

// Grouping - we use parenthesis ()
regex = /(pra){2}/ // 
str = "pranav man ";


let result = regex.exec(str);
console.log("The result from exec is ",result);



if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`)
}
