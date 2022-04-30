console.log('Welcome !');
// let element = document.createElement(li);
// // add class name 
// element.className = 'childul';
// element.id = 'createli';
// element.setAttribute('title','mytitle');
// element.innerTextm = 'Good morning ';
// let u1 = document.querySelector('ul,this');
// ul.appendChild(element);
// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
console.log(elem2);