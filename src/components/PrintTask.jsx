export default function printTask({task})
{
    return(
        <div>
            <p>Task ID: {task.id}</p>
            <p>To do: {task.name}</p>
            <p>Before: {task.deadline}</p>
            <p>Importance: {task.importance}</p>
        </div>
    );
}