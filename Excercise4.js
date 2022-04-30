console.log('welcome ');

const myjson = `pranav : name,
phone number : 123456789`

const myobj = JSON.parse(myjson);
console.log('The object is :',myobj);
console.log('This this result ')

let Meanings = document.getElementById('Meanings');
Meanings.addEventListener('click',()=>{
    console.log('click of meanings');
    populate();
})
function populate(){
    let results = myobj['results'];
    let html = "";
    results.forEach(element => {
        html += `<li>one of the defination of example is   ${element.definition}</li>`;
    });
    let defs = document.getElementById('defs');
    defs.innerHTML = html;
}