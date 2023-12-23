import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import counterContext from './context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <counterContext.Provider value={{counter:0}}>
    <App />
  </counterContext.Provider>,
)
