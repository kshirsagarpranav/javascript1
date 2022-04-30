console.log('welcome !');



// Any computation we do requires pocessor for our  Java Script engine to get the job done 
// Many request interact with things outside of the processor eg: they may communicate over a network or request data from the storage disk 
// we don't want our processor to sit idle when such things are happening .
// An asynchronous : model allow multiple things happen at the same time .
// in Synchronous :programming model things happen one at a time (back to back ) .
// When we call a function that performs a long action it returns only when the has finished so that it can return the result .


// ways to write asynchronous code 
// 1) Async/ await 
// 2)callback
// 3) Promises
setTimeout(() => {
    for(let index = 0; index < 45; index++) {
        const element = index;
        console.log("This is index number" + index);
    }
    
},50);
// for(let index = 0; index < 45; index++) {
//     const element = index;
//     console.log("This is index number" + index);
// }
console.log("Done printing ");
