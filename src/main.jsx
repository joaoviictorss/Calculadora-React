import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './assets/main/Calculator.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Calculadora</h1>
    <Calculator />
  </React.StrictMode>,
)
