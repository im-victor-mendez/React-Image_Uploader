import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LayoutProvider } from './contexts/layoutContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </React.StrictMode>,
)
