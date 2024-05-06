var checked=false
var count=0;
var tsec=0;
const timer=document.getElementById("msec");
const timersec=document.getElementById("sec");
const button=document.getElementById("btn");
    function handlereset(){
        count="00";
        tsec="00"
      timer.innerHTML=count;
      timersec.innerHTML=tsec;
    }
function handlestart(){
checked=!checked

    if(checked===true){
        mytimer=setInterval(()=>{
            count++
            count=count%500;
            if(count===499){
                tsec++;
                timersec.innerHTML=tsec<10? "0"+tsec:tsec;
            }
            timer.innerHTML=count<10? "0"+count : count
                    })
        button.innerHTML="pause"
    }
else{

    button.innerHTML="start"
        clearInterval(mytimer)
}
}
