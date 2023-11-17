import { useState} from "react"
import {useTask} from "../store/storeTaskuri"
import PrintTask from "../components/PrintTask"

function DeleteTaskPage() {

  const tasks = useTask((state) => state.tasks)
  const DeleteTask = useTask((state) => state.deleteTask)
  const [index, setIndex] = useState(0)


  function handlePreviousClick(){
    if(index <= 1) 
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
      <PrintTask task = {tasks[index]}/>
      <br />

    <button onClick = {() => DeleteTask(tasks[index].id)}>
      Delete
    </button>

    </div> 
    </div>
  )
}

export default DeleteTaskPage