const hrs=document.getElementById("hrs")
const mins=document.getElementById("mins")
const secs=document.getElementById("secs")
const day=document.getElementById("day")
const ampm=document.getElementById("ampm")

setInterval(()=>{
    const d=new Date();
    var AmPm=d.getHours()>12? "Am":"Pm" 
    var hours=d.getHours();
    var hr=hours;
    hrs.innerHTML=hr>12? hr-12:hr
    mins.innerHTML=d.getMinutes()<10? "0"+d.getMinutes():d.getMinutes()
    secs.innerHTML=d.getSeconds()<10? "0"+d.getSeconds():d.getSeconds()
    ampm.innerHTML=AmPm

},1000)
