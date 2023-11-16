import { useState } from "react"
import { useTask } from "../store/storeTaskuri"

function AddTask() {
  const addTask = useTask((state) => state.addTasks)
  const tasks = useTask((state) => state.tasks)
  const [newName, setNewName] = useState("")
  const [newDeadline, setNewDeadline] = useState("")
  const [newImportanta, setNewImportanta] = useState("")
  return (
    <div>
      <div>
        <p>Nume</p>
        <input onChange={(e) => {setNewName(e.target.value)}} type="text" />
        <p>Deadline</p>
        <input onChange={(e) => {setNewDeadline(e.target.value)}}type="text" />
        <p>Importanta</p>
        <select defaultValue="important">
          <option onClick={() => {setNewImportanta("Important")}} value="Important">Important</option>
          <option onClick={() => {setNewImportanta("Neimportant")}} value="Neimportant">Neimportant</option>
        </select>
        <button onClick={() => { addTask(newName, newDeadline, newImportanta); console.log(tasks) }}>Adauga task</button>
      </div>
    </div>
  )
}

export default AddTask