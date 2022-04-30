console.log('welcome pk');

// Generators in JavaScript 

function* numberGen(){
    let i = 0;
//     yield 1;
//     yield 2;
//     yield 3;
    while(true){
        yield (i++)
        // yield(i++).toString();
    }
}
const gen = numberGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);