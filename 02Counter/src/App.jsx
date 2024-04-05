import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  
  const addValue = () => {
    
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    if(counter <= 0){
      counter = 0;
      setCounter(counter)
    }
    else {
    counter = counter -1;
    setCounter(counter);
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <br />
      <h2>Counte value :{counter}</h2>
      <br />
      <button onClick={addValue }>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remover Value</button>
    </>
  )
}

export default App
