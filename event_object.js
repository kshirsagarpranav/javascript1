console.log('welcome to event');
document.getElementById('heading').addEventListener("click", function (e) {
    let variable;
    console.log('You have clicked the heading ');
    variable = e.target;
    variable = e.target.className;
    variable = e.target.className.getElementById;
    variable = Array.from(e.target.classlist);
    variable = e.target.id;
    variable = e.offsetX;
    console.log(variable);
    // location.href = '//fackbook.com'
});