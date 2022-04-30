console.log('welcome ');
let impArray = ['Tomoto','Cabbage','Brinjal'];
// add a key value pair inside local Storage
localStorage.setItem('Name','pranav');
localStorage.setItem('Name2','Ajay');
localStorage.setItem('Name3',JSON.stringify(impArray));
// clears the entire local storage 
// localStorage.clear();


localStorage.removeItem('Name2');
// retrive an item from local storage 
let Name = localStorage.getItem(Name);
Name = JSON.parse(localStorage.getItem('Tomoto'));
// console.log(Name)

// sessionStorage