// console.log("Welcome to Functions ");
// function greet(name){
//     console.log(`Happy Birthday ${name} How are you`);
//     return 2;
// }
// let name = 'Pranav';
// console.log(`Happy Birthday ${name} Good morning`);
// let val = greet(name);
// console.log(val);

// const myobj = {
//     name : "Pranv",
//     college : function(){
//         return "JSPM";
//     }
//     // School : function2(){
//     //     return "BSM";
//     // }
// }
// console.log(myobj.college());
// arr = ['Apple','Potota','BMW','Board'];
// arr.forEach(function(element,index,array) {
//     console.log(element,index,array); 
// });





// Scope
if(1){
    var  a = 32;
    console.log(a);
}
console.log(a);
function ui(name){
    var a = 5;
    console.log(a);
    return `This is a ${name} ui`;
}
console.log(ui("Pranav"),a);