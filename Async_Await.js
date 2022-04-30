console.log('welcome pranav !');

async function pranav(){
    console.log("Inside pranav function ");
    const respone = await fetch('api.github.com');
    console.log('Before response ');
    const user = await respone .json();
    console.log('user resolved ');
    return user;

    // return "pranav";
}
console.log("Before Calling Pranav ");
let  a = pranav();
console.log("After Calling Pranav ");
console.log(a);
a.then(data => console.log(data));
console.log("Last Line ");