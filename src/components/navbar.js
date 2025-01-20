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
    <nav className='flex w-full justify-between bg-gray-300 p-10'>
      <ul className='justify-items-center'>
        <li className='inline-block cursor-pointer hover:font-bold'>
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
      <div className=''>Add LOGO (and center better)</div>
      <div>Log In</div>
    </nav>
  )
}
