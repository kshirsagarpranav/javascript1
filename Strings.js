console.log("I am Learning About Strings ");
const name = "Pranav";
const greeting = "Good Morning";
console.log(greeting + name );

let html
html = '<h1> This is Heading</h1>' +'<p> This is Pranav</p>';
html = html.concat('This ');
console.log(html);
console.log(html.length);
console.log(html.toLocaleUpperCase());
console.log(html.toLocaleLowerCase());

// console.log(html[0]);
// These are Various Functions used . 
// console.log(html.indexOf('This'))
// console.log(html.lastIndexOf('s'));
// console.log(html.charAt('p'));
// console.log(html.endsWith('str2'));
// console.log(html.includes(''));
// console.log(html.substring('0,1'));
// console.log(html.slice('-2'));
// console.log(html.split(''));
// console.log(html.replace('this','arnav'));

let fruits1 = 'Apple';
let fruits2 = 'Mango';
let myhtml = `Hello ${name}
              <h1> This is Heading</h1>
              <p> You like ${fruits1} and ${fruits2}
`;
document.body.innerHTML = myhtml;