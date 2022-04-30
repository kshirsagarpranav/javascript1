console.log('welcome pranav ! ');

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData(){
    console.log("Started getData");
    url = "pranav.txt";
    fetch(url).then((respone)=>{
        console.log("Inside first then ");
        return respone.text();

    }).then((data)=>{
        console.log("Inside second  then ");
        console.log(data);
    })
}

function postData(){
    url = "pranav.txt";
    data = '{"Name":"Arnav35355"}';
    // console.log("Started postData");
    params = {
        method : 'post',
        headers : {
            'content-Type': 'application/json'
        },
        body : data,
    }
    fetch(url,params).then((respone)=>{
        // console.log("Inside first then ");
        return respone.text();

    }).then((data)=>{
        // console.log("Inside second  then ");
        console.log(data);
    })
}
// console.log("Before Running getData")
// getData()
// console.log("After Running getData ")

postData();