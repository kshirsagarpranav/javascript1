console.log('welcome pranav !');


// This is the symbol for Arrow function -:  => 
const Pranav = function(){
    console.log("You the best programmer !");
}
Pranav();

// const India = function(){
//     return "India has Taj Mahal ! ";
// }
// console.log(India())


// 1 liners do not require  brackets / return 
//  1 line will automatically return 
const USA = () => "USA is amazing !";
console.log(USA())

const Name = () => ({name : "Pranav"});
console.log(Name())


// Single parameters do not need parenthesis but you will have to put parenthesis if there are Multiple parameters 
const NName = (name,ending) => "Good Morning " + name+ ending;
console.log(NName('Pranav','Bye'))

