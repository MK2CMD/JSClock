let hrs = document.getElementById('Hours');
let mins = document.getElementById('Mins');
let secs = document.getElementById('Secs');
let AmPm = document.getElementById('timechange');
let today = document.getElementById('today');



setInterval(()=>{
    let now = new Date();
    hrs.innerHTML = (now.getHours()<10?"0":"") + now.getHours();
    mins.innerHTML = (now.getMinutes()<10?"0":"") + now.getMinutes();
    secs.innerHTML = (now.getSeconds()<10?"0":"") + now.getSeconds();
    today.innerHTML = now.toString();
    Fdate = today.innerHTML.slice(0,15);
    today.innerHTML = Fdate;

    if(now.getHours() >=12){
      timechange.innerHTML = "PM";
    }
    if(now.getHours() >=12){
      hrs.innerHTML = now.getHours() -12;
    }
    if(now.getHours() ==12){
      timechange.innerHTML = "PM";
      hrs.innerHTML = 12;
      
    }
    if(now.getHours() <12){
        timechange.innerHTML = "AM"; 
    }
    if(now.getHours() ==24){
      hrs.innerHTML = "12";
    }
    
    },1000);
    
    

/*-----StopWatch
const StartBtn = document.querySelector('startTime');
const StopBtn = documnet.querySelector('stopTime');
const ResetBtn = document.querySelector('reset');
const timer_display = document.querySelector('stw_display');
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let pause = true;
let intervalId;
let SWhours = 0;
let SWminutes = 0;
let SWseconds = 0;

StartBtn.addEventListener("click", () =>{
  if(pause){
    pause = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});
StopBtn.addEventListener("click", () =>{});
ResetBtn.addEventListener("click", () =>{});

function updateTime(){
  elapsedTime = Date.now()-startTime;

  SWseconds = Math.floor((elapsedTime / 1000) % 60);
  SWminutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  SWhours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
  
  console.log(SWhours);
};*/








    