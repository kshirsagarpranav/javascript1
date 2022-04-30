console.log("welcome !");

// Ajax stands for asynchronous javaScript and XML
// AJAX is a not a programming language. Its is a set of existing Technology.
// Ajax helps in fetching data asynchronously without interfering with existing page 
// No page reload/ refresh
// Modern Website use JSON insted or XML for data transfer. 


// Ajax uses XMLHttpsRequest object to achieve this . 
// Modern website uses Json insted or XML for data transfer.
// Data can be transferred in any format and protocol 


let btn = document.getElementById("btn");
btn.addEventListener('click',buttonClickHandler);
function buttonClickHandler() {
    console.log('You have clicke the btn ');
    // Instantiate an xhr object 
    const xhr = new XMLHttpRequest();
    // open the object 
    xhr.open('GET','pranav.txt',true);
    // what to do  on progress 
    xhr.onprogress = function () {
        console.log("on progress ");
    }

    // 
    xhr.onload = function (){
        if(this.status === 100){
            console.log(this.responseText)
        }
        else{
        console.error("some error occured ");
        }
    }
    xhr.send();
}
