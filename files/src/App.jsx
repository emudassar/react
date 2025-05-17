import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleSwitch />
    </>
  )
}

export default App
