import React, { useState } from 'react'

const App=()=> {
  let [task,setTask]=useState("");
  let [taskArray,setTaskArray]=useState([]);
  let taskchanger=(e)=>{
    setTask(e.target.value);
  }
  let handleClick=()=>{
    let finalarray=[...taskArray,task];
    setTaskArray(finalarray);
    setTask("");
  }
  let handleDelete
  return (
    <div>
      <div className="container">
        <input value={task}onChange={(event)=>{taskchanger(event)}} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {
          taskArray.map((ele,idx)=>{
            return  <li key={idx}>{ele}</li>
          })
        }
      
      </ul>
    </div>
  )
}

export default App