console.log('welcome to prototype ');

let obj = {
    name : "pranav ",
    surname : "kshirsagar",
    city : "pune",
}

function Obj(givenName){
    this.name = givenName;
}
Obj.prototype.getName = function(){
    return this.name;
}
let obj2 = new Obj("pranav");
console.log(obj2);