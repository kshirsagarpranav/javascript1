console.log('Welcome selectors ');
// Element selectors 
// 1) single element selector 
// 2) Multi element selector 
let element = document.getElementById('myfirst');
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "green";
// element.style.background = "violet";
element.innerText = "Pranav is a good programmer !";
element.innerHTML = "<b>Pranav is a good programmer !</b>";
console.log(element);


let sel = document.querySelector('#myfirst');
// console.log(sel);
sel = document.querySelector('h1');
sel.style.color = 'orange';

console.log(sel);


// Multi element selector 
let ele = document.getElementsByClassName('child');
ele = document.getElementsByClassName('container');
ele = document.getElementsByTagName('div');
console.log('ele')