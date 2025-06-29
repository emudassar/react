import React, { useState } from 'react'

const State = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-2xl font-bold text-blue-900'>Counter</h1>
      <p>Count: {count}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default State
