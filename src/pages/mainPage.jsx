import PrintAllTasks from "../components/PrintAllTasks"
import { useTask } from "../store/storeTaskuri"
function MainPage() {
  const tasks = useTask((state) => state.tasks)
  return (
    <div>
    <h1>This is your task page!</h1>
    <h2>These guys aren't gonna do themselves :)</h2>
    <PrintAllTasks tasks = {tasks}/>
    </div>
  )
}

export default MainPage