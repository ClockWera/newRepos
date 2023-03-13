import React from 'react'
import ReactDOM from 'react-dom/client'
import {Body} from './Body'
import {Header} from './Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)