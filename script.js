let date=document.getElementById('date');
let time=document.getElementById('time');
let sec=document.getElementById('sec');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let loop=document.getElementById('loop');
let result=document.getElementById('result');

setInterval(function(){
let d=new Date;
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
let day=d.getDate();
let month=d.getMonth();
let year=d.getFullYear();
if(h<10)h='0'+h;
if(m<10)m='0'+m;
if(s<10)s='0'+s;
if(day<10)day='0'+day;
if(month<10)month='0'+month;

date.textContent=`${day}.${month}.${year}`
time.textContent=`${h}:${m}:${s}` ;

})

let h='00';

let mm='00';
let ss='00';
sec.textContent=`${mm}:${mm}:${ss}`

start.onclick=function(){
    let interval=setInterval(function(){
   
        ss++
        if(ss<10)ss='0'+ss;
        if(ss===59)
        {
            mm++
ss=00;        
        }
        sec.textContent=`${mm}:${mm}:${ss}`;
        
        stop.onclick=function(){
            clearInterval(interval);
        }
        loop.onclick=function(){
            
let getSS=sec.textContent;
let h3=document.createElement('h3');
h3.textContent=getSS;
result.appendChild(h3);
        }
        let res=document.getElementById('res');

res.onclick=function(){
    clearInterval(interval);
     h='00';

     mm='00';
     ss='00';
     sec.textContent=`${mm}:${mm}:${ss}`;

}
        
        },1000)
}

let num=document.getElementById('num');
let plus=document.getElementById('plus');
let minus=document.getElementById('minus');

num.textContent=25;
plus.onclick=function(){
num.textContent++
}
minus.onclick=function(){
    num.textContent--
    }
    let minute=document.getElementById('minute');
    let second=document.getElementById('second');
    
    let startT=document.getElementById('startT');
    let stopT=document.getElementById('stopT');
    let resetT=document.getElementById('resetT');
startT.onclick=function(){
    minute.textContent=num.textContent;
    
        startTimer();
    
}

function startTimer(){
    let timerInterval=setInterval(function(){
let getMM=minute.textContent;
let getSS=second.textContent;

if(getSS==0 && getMM!=0){
    getSS=60;
    getMM--
}
if(getSS==0&&getMM==0){
    clearInterval();
}
getSS--

minute.textContent=getMM;
second.textContent=getSS;


stopT.onclick=function(){
    clearInterval(timerInterval)
}
resetT.onclick=function(){
    clearInterval(timerInterval)
    minute.textContent='00';
    second.textContent='00';}
    },1000)
}

