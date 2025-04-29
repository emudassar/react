import { useState } from "react"

const MessageForm = () => {

    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Message saved: ${message}`)
        setMessage('')
    }

  return (
    <div>
      <h1>Message Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message"/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default MessageForm
