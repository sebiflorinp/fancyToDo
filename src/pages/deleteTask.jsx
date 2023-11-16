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
  function handleDeleteClick(){
    DeleteTask(index)
  }
  function printCurrentTask(){
     return <>{tasks.filter((task) => task.id == index).map((task) =>{ return <PrintTask task = {task}/>})}</>
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
    {printCurrentTask}
      <br />
    <button onClick = {handleDeleteClick}>
      Delete
    </button>
    </div>
    </div>
  )
}

export default DeleteTaskPage