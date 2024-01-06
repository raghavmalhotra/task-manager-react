import { useState } from 'react'
import { TaskCard } from './TaskCard'

export const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true)

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function toggleTasks() {
    setShow(!show)
  }

  return (
    <>
      <ul>
        {show &&
          tasks.map((task) => <TaskCard task={task} deleteTask={deleteTask} />)}
      </ul>

      <button onClick={toggleTasks}>toggle</button>
    </>
  )
}
