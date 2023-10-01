import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import './assets/css/index.css'
import './assets/css/main_menu.css'
import './assets/css/colored.css'

export const IS_LOOKING_FOR_JOB = true;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
