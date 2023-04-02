import { createRoot } from 'react-dom/client';
import React from 'react'
import { Body } from './Body'
import { Header } from './Header'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)