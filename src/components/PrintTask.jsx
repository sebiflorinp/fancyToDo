export default function PrintTask({task})
{
    if(task == undefined) return <p>No tasks left to show :(</p>
    return(
        <div>
            <p>Task ID: {task.id}</p>
            <p>To do: {task.name}</p>
            <p>Before: {task.deadline}</p>
            <p>Importance: {task.importance}</p>
        </div>
    );
}