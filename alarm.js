console.log('welcome man');

const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click',setAlarm);
var audio = new Audio('');
function ringBell(){
    audio.play();

}
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value)
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now
    console.log(timeToAlarm);
    if(timeToAlarm>= 0){
        setTimeout(() => {
            console.log("Ringing Now");
            ringBell();
        }, timeToAlarm);
    }
}