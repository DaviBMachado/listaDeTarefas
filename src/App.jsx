import { useState } from 'react'
import ToDoList from './assets/components/ToDoList';

function App() {
  const [count, setCount] = useState(0)

  return (<ToDoList/>)
}

export default App
