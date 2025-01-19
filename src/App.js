import React, { useState } from 'react'
import './App.css';
//import { SpeedInsights } from '@vercel/speed-insights/react';


export default function App() {
  return (
    <div className='App'>
      <div className='top-bar'>Global Click Counter</div>
      <div className='container'>
        {/* <MyNavBar /> 
        <SpeedInsights /> Speed insights is not working. I don't want to deal with it */}
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


