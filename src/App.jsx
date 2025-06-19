
import './App.css'
import CustomButton from './components/CustomButton'

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Custom Buttons</h1>
      <CustomButton text="Save Changes" color="green" />
      <CustomButton text="Delete Item" color="red" />
      <CustomButton text="Learn More" color="#3b82f6" />
    </div>
  )
}

export default App
