import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App/index.jsx'
import './Styles/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
