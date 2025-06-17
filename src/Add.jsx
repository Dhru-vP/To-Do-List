import { useState } from "react";

export function Add(props){


const[data,setData]=useState(
   {
    task:''
   }

);
   function handleForm(e){
   setData({...data,
      [e.target.id]:e.target.value});
}
function submit(e){
   e.preventDefault();
   props.addTask(data);
}

   return(
<div>
   <form onSubmit={submit}>
    <p>Add More Tasks: </p>
      <label id="task" >Task: </label>
      <input id="task"type="text" onChange={handleForm}></input>
      <button>Start</button>
   </form>
</div>
   );
}