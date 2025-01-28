import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import TimeoutPage from './components/Timeout'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react'
import ExtraNavBar from './components/suggestedNavBar';



export default function App() {
  return (
    <Router>
      <div>
      {/* <ExtraNavBar /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/timeout' element={<TimeoutPage />} />
        </Routes>
      </div>
      <SpeedInsights />
      <Analytics />
    </Router>
  )
}

