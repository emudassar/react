import { useState, useEffect } from 'react'

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <h1>User Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  )
}

export default UserProfile