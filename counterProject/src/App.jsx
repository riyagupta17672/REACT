import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  
  // Hook useState takes an array with two values

    const addValue = () => {
      if(counter <= 19) {
        setCounter(counter + 1)
        // setCounter(preCounter => preCounter + 1)
        // setCounter(preCounter => preCounter + 1)
        // setCounter(preCounter => preCounter + 1)
        // setCounter(preCounter => preCounter + 1)
      }
    }
  
    const removeValue = () => {
      if(counter >= 1) {
        setCounter(counter - 1)
      }
    }
  
  return (
    <>
      
      <h2>Counter Value: {counter}</h2>

      <button onClick= {addValue} >Add Value</button>
      <br/>
      <button onClick= {removeValue}>Remove Value</button>
    </>
  )
}

export default App
