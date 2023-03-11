import React from 'react'
import ReactDOM from 'react-dom/client'
import BodyTS from './BodyTS'
import HeaderTS from './HeaderTS'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeaderTS />
    <BodyTS />
  </React.StrictMode>,
)