import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


/*
  * TODO
  * - consider adding a dynamic timer to the screen as the timeout is counting down
  *
  * - 
  *
  *
  *
  */





const TimeoutPage = () => (
  <div className='h-screen flex flex-col items-center bg-blue-100'>
    <p className='p-2'>You are in timeout... Wait for the button to appear.</p>
    <p className='p-2'>DO NOT USE THE NAVBAR</p>
    <p className='p-2'>It won't hurt anything but you deserve this</p>
    <div className='p-20'></div>
    <TimeoutFunction />
  </div>

)


function TimeoutFunction() {
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true)
    }, 10000)

    return () => clearTimeout(timer)
  })


  return (
    <div className='flex'>
      {showComponent && <HomeLink />}
    </div>
  )
}


function HomeLink() {
  return (
    <Link to="/" className="flex p-10 border-2 border-black rounded-xl bg-green-100">
      This is your way back home
    </Link>
  )
}



export default TimeoutPage
