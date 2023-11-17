import PrintTask from "./PrintTask";
export default function PrintAllTasks({tasks})
{
    console.log(tasks)
    if(tasks[0] == undefined) return <p>No tasks left to show :(</p>
    return (tasks.map(task => {return <div key = {task.id}><PrintTask task = {task} /></div>}))
}