console.log('Welcome to Traversing Dom');
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.children);
let nodeName = cont.childNodes[9].nodeName;
console.log(nodeName);
// node type
// 1 element
// 2 attribute
// 3 text node
// 8 Comment
// 9 document
// 10 doctype

let container = document.querySelector('div.container');
console.log(container.children);
console.log(container.lastChild);
console.log(container.childElementCount);// count of child elements 
console.log(container.firstElementChild);
console.log(container.firstElementChild.parentElement);