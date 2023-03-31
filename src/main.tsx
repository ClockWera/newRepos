<<<<<<< HEAD:vite-project/src/main.tsx
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
=======
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
>>>>>>> 5dafb63b0f827df0435e9881084f2f65bc3d6fee:src/main.tsx
)