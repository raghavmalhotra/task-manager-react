export const TaskCard = ({ task, deleteTask }) => {
  return (
    <>
      <li key={task.id}>
        {task.id} taskname: {task.name} completed: {task.completed}
        <button onClick={() => deleteTask(task.id)}>delete Task</button>
      </li>
    </>
  )
}
