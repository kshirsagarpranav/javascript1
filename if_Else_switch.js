console.log("Welcome to If Else & Switch Statement ");
const age = 18;
const varible = 40;
const doesDrive = false;
if(age == 20){
    // console.log('Age is 20')
}
else if(age == 60){
    console.log('Age is 65');
}
else{
    // console.log('Age is not 20');
}
if(typeof varible != 'undefined'){
    console.log('Variable is defined');
}
else(typeof varible != 'Variable is not defined');{
    console.log('Variable is not defined');
}

if(doesDrive || age > 18){
    // console.log("You can Drive");
}
else(doesDrive);{
    console.log("You Cannot Drive ");
}

// console.log(age == 50 ? 'Age is 50':'Age is not 50')

// switch case statement 
switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 28:
        console.log("You are  28");
        break;
    case 48 :
        console.log("You are 48");
        break;
    default:
    case 18 :
        console.log("You are unknow age ");
        break;
}