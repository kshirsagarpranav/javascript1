console.log("Welcome to Loops");

// General Loops
// 1) For
// 2) while
// 3) Do While


// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// let j = 0;
// while (j < 10){
//     console.log(j);
//     j+= 1;
// }

// let a = 0;
// do{
//     console.log(k + 1);
//     if(k === 5){
//         k += 1;
//         break;
//     }
//     k += 1;
// }while(k<10);
// console.log('Done');

// let arr = [3,5,67,33,8];
// arr.forEach(function(element){
//     console.log(element);
// });

let obj = {
    name : "Pranav Kshirsagar ",
    age : 20,
    city: Pune,
}
for(let key in obj){
    console.log(`${keys} or object is $ {obj[keys]}`)
}
console.log('Done');