var a=Math.floor(Math.random()*9)
var b=Math.floor(Math.random()*9)

const que=document.getElementById("question")
const input=document.getElementById("input")
const button=document.getElementById("button")
const scores=document.getElementById("score")
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0
}
scores.innerHTML=`score:${score}`
que.innerHTML=`Multiply of ${a} by ${b}?`
const corans=a*b;
button.addEventListener("submit",()=>foo())
function foo(){
    var userans= +input.value
    if(corans===userans){
        score++
        updatestoreage()
    }
    else{
        score--
        updatestoreage()
    }
}
function updatestoreage(){
    localStorage.setItem("score",JSON.stringify(score))
}
