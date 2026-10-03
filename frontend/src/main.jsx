import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './portfolio.css'
import home from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <home />
  </StrictMode>,
)
