import { useState} from "react"
import {useTask} from "../store/storeTaskuri"
import PrintTask from "../components/PrintTask"

function DeleteTaskPage() {
  const [index, setIndex] = useState(0)
  const tasks = useTask((state) => state.tasks)
  const DeleteTask = useTask((state) => state.DeleteTask)
  function handlePreviousClick(){
    if(index >= 1)
      setIndex(index - 1)
    else
      setIndex(tasks.length - 1)
  }
  function handleNextClick(){
    if(index <= tasks.length - 2) 
      setIndex(index + 1)
    else
      setIndex(0)
  }
  return (
    <div>
    <h1>Delete Task</h1>
    <div>
      <button onClick = {handlePreviousClick}>
        Previous
      </button>
      <button onClick = {handleNextClick}>
        Next
      </button>
      <br />
      {tasks.filter((task) => task.id == index).map((task) =>{ return <div key = {task.id}><PrintTask task = {task}/></div>})}
      <br />
    <button onClick = {() => DeleteTask(index)}>
      Delete
    </button>
    </div>
    </div>
  )
}

export default DeleteTaskPage