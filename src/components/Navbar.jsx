import { Link } from 'react-router-dom'
import { useState } from 'react'

/* TODO 
  * - add active/inactive styles to different nav bar <Link>'s
  * - Generally style the navbar, including adding a logo and shadow below the bar
  * - complete auth instead of just a div
  *
  *
  * DONE:
  *
  * - Handle mobile usage to condense ul into hamburger and keep logo/login sections
  * - I really don't like the way my logo is overlapping my nav list when the screen
  *   size gets too small. I need to fix that somehow.
  *     This is also a problem for correctly handling the movement of the logo
  *     with respect to the dynamic hamburger button or navbar. I doubt this will
  *     look right when I change the way this component finds the center of the screen
  */

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  


  return (
    <nav className='flex items-center justify-between w-full bg-linear-to-r/oklch 
        from-cyan-500 via-blue-400 to-purple-500 p-2 sm:p-3 md:p-4 shadow'>
      <div className='flex space-x-4 items-center'>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
                >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
        <ul className={`hidden lg:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
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
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2 text-center 
          text-xl sm:text-2xl md:text-3xl'>
        <h1 className=''>
          {'Balaakay\'s Office'}
        </h1>
      </div>
      <div className='flex items-center border border-black rounded-lg bg-red-100
          p-3 sm:p-4 md:p-5'>
        {'Log In'}
      </div>
      {/* Mobile Menu */}
      {isOpen && (
         <div className="lg:hidden absolute left-0 top-16 w-48 ">
           <ul className="bg-white shadow-md">
             <li>
               <Link to="/" className='block px-4 py-2'>Home</Link>
             </li>
             <li>
               <Link to="/blog" className='block py-2 px-4 '>Blog</Link>
             </li>
             <li>
               <Link to="/about" className='py-2 px-4 block'>About</Link>
             </li>
             <li>
               <Link to="/contact" className='block py-2 px-4'>Contact</Link>
             </li>
           </ul>
         </div>
       )}
    </nav>
  )
}
