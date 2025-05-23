import { useEffect, useState } from "react"

const CounterLogger = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`Counter updated: ${count}`);
        
    }, [count])

  return (
    <div className="container">
        <h1>Counter Logger</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button> 
    </div>
  )
}

export default CounterLogger
