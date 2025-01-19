import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='block justify-center justify-items-center bg-red-100'>
      <ul className='justify-items-center'>
        <li className='inline-block p-10 bg-blue-100'>
          <Link to="/">Home</Link>
        </li>
        <li className='inline-block p-10'>
          <Link to="/about">about</Link>
        </li>
        <li className='inline-block p-10'>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  )
}
