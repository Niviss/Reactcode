import "./App.css"
import { useState } from "react";
 function App(){

const [item,setitem]=useState();
const [listofwork,setlistofwork]=useState(JSON.parse(localStorage.getItem("userData")));
/**/ 


const HandleSubmit=(e)=>{
  e.preventDefault();
  const id=listofwork.length?listofwork[listofwork.length-1].id+1:1;
  const val=[...listofwork,{id,item}];
  setlistofwork(val);
  setitem("");
  localStorage.setItem("userData",JSON.stringify(val));
}

const handleRemove=(id)=>{
const filtereddatas=listofwork.filter((data)=>data.id!==id)
setlistofwork(filtereddatas)
localStorage.setItem("userData",JSON.stringify(filtereddatas))
}
const handleId=(id)=>{
  const checkdatas=listofwork.map((data)=>data.id===id?{...data,checked:!data.checked}:data);
  setlistofwork(checkdatas)
  localStorage.setItem("userData",JSON.stringify(checkdatas))
}
  return(
    <div className="Todo">
      <div className="Container">
        <h1>To-Do-List</h1>
        <form onSubmit={HandleSubmit}>
          <input type="Text" placeholder="Enter work" value={item} onChange={(e)=>setitem(e.target.value)} required/>
          <button>Add</button>
        </form>
        <div className="list-cont">
          <ol>
            {listofwork.map((data,id)=>{
              return(
            <li key={id}>
              <input type="checkbox" className="checkbox-input" checked={data.checked} onChange={()=>handleId(data.id)}/>
              <input type="text" className="value-input" value={data.item}/>
              <button className="Remove-button" onClick={()=>handleRemove(data.id)}>Remove</button>
            </li>
          )})}
          </ol>
          </div>
    </div>
    </div>
  )
 }
 export default App;