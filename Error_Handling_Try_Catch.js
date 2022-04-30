console.log('Good Evening ');

let a = "Pranav Codder ";
a = undefined;
if(a != undefined){
    throw new Error('This is not undefined ');
}
else{
    console.log('This is undefined');
}

try {
    console.log("We are inside try block ");
    functionPranav();
} catch (error) {
    console.log("Are you okay ? ");
    console.log(error);
    
} finally{
    console.log("Finally we will run this ");
}