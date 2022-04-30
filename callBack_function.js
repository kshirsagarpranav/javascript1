console.log('welcome pranav Happy new year ! ');

const students = [
    { name: "pranav", subject: "JavaScript" },
    { name: "Arnav", subject: "Python " },
]
function enrollStudent(student, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled ");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
            callback();
        }, 3000);
    })
}

//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been enrolled ");
//         callback();
//     }, 3000);
// }

function getStudents() {
    setTimeout(function () {
        let str = " ";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched ");
    }, 1000);
}
let newStudent = { name: "Rohan", subject: "Machine Learning " }
enrollStudent(newStudent, getStudents).then(function () {
    getStudents();
}).catch(function () {
    console.log('Some error occured ');
})
// getStudents();



