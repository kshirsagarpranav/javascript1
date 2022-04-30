console.log('welcome pranav !');

class Employee{
    constructor(name,experience,division){
        this.name = name;
        this.experience = experience; 
        this.division = division;
    }
    slogan(){
        return `I am ${this.name} and this the best company !`;
    }
    joiningYear(){
        return 2018 - this.experience;

    }
    static add(a,b){
        return a + b;
    }
}

pranav = new Employee("pranav",50,2);
console.log(pranav);
// console.log(pranav.joiningYear());
// console.log(pranav.slogan());
console.log(Employee.add(39,7));


class programmer extends Employee{
    constructor(name,experience,division,language){
    super(name,experience,division);
    this.language = language;
    // this.github = github;
    }

    favoriteLanguage(){
        if(this.language == 'python'){
            return 'python';
        }
        else{
            return 'javaScript';
        }
    }
    static multiply(a,b){
        return a * b;
    }
}

Ajay = new programmer("Ajay",5,"Maggi","C++");
console.log(Ajay)
console.log(programmer.multiply(3,9))
console.log(Ajay.favoriteLanguage());