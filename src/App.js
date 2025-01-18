import React, { useState } from 'react'
import './App.css';


export default function App() {
  return (
    <div className='App'>
     <div className='top-bar'>This is the first div</div>
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
    <button onClick={handleClick} className='main-button bg-green-300 p-10 justify-center rounded-xl'>
      {count}
    </button>
  )
}


function MyNavBar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-list'>
        <li className='sidebar-item font-bold text-blue-500'>Home</li>
        <li className='sidebar-item font-bold'>About</li>
        <li className='sidebar-item font-bold'>Profile</li>
        <li className='sidebar-item font-bold'>Settings</li>
      </ul>
    </div>
  )
}










//export default function App() {
//  return (
//    <div className="App">
//    <MyNavBar />
//    <header className="App-header">
//    <MyButton />
//    <img src={logo} className="App-logo" alt="logo" />
//    <p>
//    Edit <code>src/App.js</code> and save to reload.
//    </p>
//    <a
//    className="App-link"
//    href="https://reactjs.org"
//    target="_blank"
//    rel="noopener noreferrer"
//    >Learn React</a>
//    </header>
//    </div>
//  );
//}
