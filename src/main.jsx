import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import FavouritesProvider from './context/FavouritesContext'

createRoot(document.getElementById('root')).render(
  <FavouritesProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </FavouritesProvider>
)
