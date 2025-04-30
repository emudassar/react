import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='container'>
      <h1>Welcome</h1>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>      
    </div>
  )
}

export default App
