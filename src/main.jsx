import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TextContextProvider from './context/TextContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TextContextProvider>
      <App/>
    </TextContextProvider>
  </React.StrictMode>,
)
