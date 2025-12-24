import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// import './index.css'  // Default styles
import './styles/global.css'  // Global styles
import './indexTailwind.css'  // Tailwind CSS styles (for clean Tailwind styles in App.jsx)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
