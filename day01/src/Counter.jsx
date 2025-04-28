import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div className="container">
      <h1>Counter Project</h1>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter +1)}>Counter</button>
    </div>
  )
}

export default Counter
