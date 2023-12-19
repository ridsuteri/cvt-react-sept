import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Component1/>
        <hr />
        <Component2/>
      {/* <Routes>
        <Route path="/" element={<Component1/>} />
        <Route path="/about" element ={<Component2/>}/>
        <Route path="/users/:username" element={<h1>Welcome to user page...</h1>}/>
      </Routes> */}
    </div>
  )
}

export default App