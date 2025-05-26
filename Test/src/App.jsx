
import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0) ; 
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  )
}
export default App ; 