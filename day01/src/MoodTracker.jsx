import { useState } from "react"

const MoodTracker = () => {

    const [mood, setMood] = useState('')

    const showMood = (event) => {
        setMood(event.target.value)
    }

  return (
    <div className="container">
      <h1>Mood Tracker</h1>
      <input type="text" placeholder='Type your mood here!' onChange={showMood} />
      <p>You are feeling: {mood}</p>
    </div>
  )
}

export default MoodTracker
