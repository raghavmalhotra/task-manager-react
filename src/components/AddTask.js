import { useState } from 'react'

export const AddTask = ({ tasks, setTasks }) => {
  // const [task, setTask] = useState({})
  const [taskName, setTaskName] = useState('')
  const [taskStatus, setTaskStatus] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskName,
      completed: taskStatus,
    }
    setTasks([...tasks, task])
    console.log(task)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setTaskName('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          type='text'
        />
        <select
          onChange={(e) => {
            setTaskStatus(e.target.value)
          }}
        >
          <option value='false'>pending</option>
          <option value='true'>completed</option>
        </select>
        <button type='submit'>add Task</button>
        <button onClick={handleReset}>reset</button>
      </form>

      <p>{taskName.length}</p>
    </>
  )
}
