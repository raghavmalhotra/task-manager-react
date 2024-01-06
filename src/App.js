import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { AddTask } from './components/AddTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  return (
    <>
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <h1>Tasks</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
