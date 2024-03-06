import './App.css';

function App() {
  const value=document.getElementById("paragraph");
  let count=0;
  function Increment_fn(){
    count++;
  value.innerText=count
}
function Decrement_fn(){
  count--;
  value.innerHTML=count
}
   
  return (
   <div >  
    <button id="incre" onClick={Increment_fn}>INCREMENT</button>
    <p  id="paragraph">Count</p>
    <button id="decre" onClick={Decrement_fn}>DECREMENT</button>
   </div>
  );
}

export default App;
