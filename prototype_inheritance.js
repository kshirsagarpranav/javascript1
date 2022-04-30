console.log('welcome pranav !');

const proto = {
    slogan : function(){
        return `This is best `;
    },
    changeName : function(newName){
        this.name = newName
    }
}

// this creates pranav Object
let pranav = Object.create(proto);
pranav.name = "pranav ";
pranav.role = "bussinessman";
console.log(pranav);

// This also creates pranav object 
const pranav2 = Object.create(proto,{
    name: {value: "pranav",writable : true},
    role : {value: "Bussinessman"},
})

pranav.changeName("pranav2");
console.log(pranav);


function Employee(name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

Employee.prototype.slogan = function(){
    return `This is best .regards ${this.name}`;
}

let pranavobj = new Employee("pranav",664393181,32);
console.log(pranavobj.slogan());

function programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language = language;
}

// inherit the prototype
programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor 
programmer.prototype.constructor = programmer;


let arnav = new programmer("arnav",7,0,"C");
console.log(arnav);