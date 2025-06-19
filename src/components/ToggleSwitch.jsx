
import { useState } from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = () => {

  const[isOn, setIsOn] = useState(false)

  const handleToggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <div className='toggle-switch' 
    onClick={handleToggleSwitch}
    style={{backgroundColor: isOn ? "#4caf50" : ""}}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span switch-state>{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  )
}

export default ToggleSwitch
