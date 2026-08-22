import Navbar from './components/Navbar'
import './index.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Enquiry from './pages/Enquiry'
import ViewProperty from './pages/ViewProperty'
import Favourites from './pages/Favourites'
import { Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/listings' element= {<Listings />} />
        <Route path='/contact' element= {<Contact />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/enquiry/property/:id' element={<Enquiry />} />
        <Route path='/enquiry/agent/:id' element={<Enquiry />} />
        <Route path='/property/:id' element={<ViewProperty />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </div>
  )
}
