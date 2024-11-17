import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
