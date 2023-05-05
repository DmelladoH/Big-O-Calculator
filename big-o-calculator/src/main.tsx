import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CodeProvider } from './context/CodeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CodeProvider>
      <App />
    </CodeProvider>
  </React.StrictMode>
)
