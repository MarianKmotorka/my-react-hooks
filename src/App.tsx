import { useState } from 'react'
import './App.css'
import UseStateWithHistoryExample from './examples/UseStateWithHistoryExample'

function App() {
  const [activeHook, setActiveHook] = useState(0)

  return (
    <div className='container'>
      <div className='menu'>
        <h1>my hooks</h1>

        <div className='item active'>useStateWithHistory</div>
        <div className='item'>useToggle</div>
        <div className='item'>useTimeout</div>
      </div>
      <div className='content'>{activeHook === 0 && <UseStateWithHistoryExample />}</div>
    </div>
  )
}

export default App
