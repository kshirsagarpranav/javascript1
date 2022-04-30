console.log('welcome pk');

// Iterators 

function fruitsIterators(values) {
    let nextIndex = 0;
    return{
        next: function(){
            if (nextIndex < values.length){
                return{
                    value : values[nextIndex++],
                    done : false
                }
            }
            else{
                return{
                    done : true
                }
            }
        }
    }
}
const myArray = ['Apple','Mango','Grapes'];
console.log("My array is",myArray);

// using the iterator 

const fruits = fruitsIterators(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);