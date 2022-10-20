import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/dist/css/Styles.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import { HashRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    
  </React.StrictMode>
)
