import { useState } from 'react'
import {Add} from './Add.jsx'
import './App.css'

function App() {
  <title>To-Do-List</title>
 const[list,setList]=useState([{
  task:'To study',
  id:1
  },{
    task:'go gym',
      id:2
  }]);

function addTask(task){
  task.id=Math.random()
setList([...list,task]);
}
function removePerson(id){
  setList(list.filter(person=>person.id!==id))
}


function Display(){
  return(
<>
    {
    list.map((p)=>(
     
          <div key={p.id} className="task-card">
            <p>Task: {p.task}  <button onClick={()=>{removePerson(p.id)}}>Done</button></p>
   
    </div>
      ))};
      </>

    )
      }
  

return(
  <div>
<h1>TO-DO-LIST</h1>
<p>The following are the Task to Complete:</p>

<Display />
<Add addTask={addTask}/>
</div>
)
}

export default App
