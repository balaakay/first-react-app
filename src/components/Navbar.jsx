import { Link } from 'react-router-dom'

/* TODO 
  * - add active/inactive styles to different nav bar <Link>'s
  * - Generally style the navbar, including adding a logo and shadow below the bar
  * - complete auth instead of just a div
  * - Handle mobile usage to condense ul into hamburger and keep logo/login sections
  * - 
  */

export default function Navbar() {
  return (
    <nav className='flex justify-between w-full bg-linear-to-r/oklch from-cyan-500 via-blue-400 to-purple-500 p-5 h-24'>
      <div className='flex space-x-4 items-center'>
        <NavList />
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2 text-center text-3xl mt-2'>
        {/* <img src='/Man_at_a_computer.jpg' alt='Logo' className='h-16 -mt-1 justify-start'/> */}
        <h1>
          {'Balaakay\'s Office'}
        </h1>
      </div>
      <div className='flex items-center border border-black rounded-lg bg-red-100 p-5'>
        {'Log In'}
      </div>
    </nav>
  )
}


function NavList() {
  return (
    <ul className='flex items-center'>
      <li className='inline-block cursor-pointer hover:font-bold '>
        <Link to="/" className='py-10 pr-7'>Home</Link>
      </li>
      <li className='inline-block cursor-pointer hover:font-bold'>
        <Link to="/blog" className='py-10 pr-7'>Blog</Link>
      </li>
      <li className='inline-block cursor-pointer hover:font-bold'>
        <Link to="/about" className='py-10 pr-7'>About</Link>
      </li>
      <li className='inline-block cursor-pointer hover:font-bold'>
        <Link to="/contact" className='py-10'>Contact</Link>
      </li>
    </ul>
  )
}
