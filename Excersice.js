console.log('welcome pranav !');

let divElem = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if(val == null){
text = document.createTextNode('This is my element.click to edit it ');
}
else{
    text = document.createTextNode('val');
}
divElem.appendChild(text);
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border : 2px solid blue;width : 150px; margin : 35px; padding : 20px;');

let container = document.querySelector('.container');
let first = document.getElementById('myfirst');
// insert element before element with id first 
container.insertBefore(divElem,first);
divElem.appendChild(text);
console.log(divElem,container,first);

// add  event listener to the divElem

divElem.addEventListener('click',function() {
    let notextArea = document.getElementsByClassName('textarea').length;
    if(notextArea == 0){
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class = "textarea form-control" id = "textarea" rows = "3">${html}</textarea>`;
    }

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })

})
