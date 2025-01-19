import React, { useState } from 'react'
import './App.css';


export default function App() {
  return (
    <div className='App'>
     <div className='top-bar'>Big Ass Click Counter</div>
      <div className='container'>
        {/* <MyNavBar /> */}
        <MyButton />
      </div>
    </div>
  )
}



function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick} className='main-button bg-blue-300 p-10 justify-center'>
      {count}
    </button>
  )
}



