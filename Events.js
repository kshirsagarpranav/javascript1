console.log('Welcome to Events ');
document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);

function func1(e) {
    console.log("Thanks ",e);
    e.preventdefault();
}

function func2(e){
    console.log("Thanks it a double Click  ",e);
    e.preventdefault();
}

function func3(e){
    console.log("thanks its a mouse down  ",e);
    e.preventdefault();
}

// mouse Enter 
// mouse Leave

document.querySelector('.no').addEventListener('mouseenter',function(){
    console.log("You Enter No !");
})

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    // document.body.style.backgroundColor = 'green'
    document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetY},6)`;
    // color is from 0 to 256 
    console.log("You  triggered mouse move event !");
})

