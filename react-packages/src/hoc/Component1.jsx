import React from 'react'
import hoc from './Hoc'
import { Link } from 'react-router-dom';
const Component1 = ({state, handler}) => {
  return (
    <div>
        <h1>component 1 here</h1>
        Click here to increment counter <br />
         {state} <br />
        <button onClick={handler}>here</button>
        {/* <Link to="/about">Click for /about</Link> */}
    </div>
  )
}

export default hoc(Component1);