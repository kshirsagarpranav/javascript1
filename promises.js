console.log('welcome pranav !');
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function :Your promise has been resolved !');
                resolve();
            }
            else {
                console.log('Function : Your promise has not been resolved !');
                reject('Sorry not fulfilled ');

            }
        }, 2000);
    })
}

func1().then(function(){
    console.log(" Pranav : thanks for resolving ");
}).catch(function(error){
    console.log("Pranav : very bad Bro !" + error);
})



// Function inside then is ran as - resolve();
// function inside catch is ran as - reject();