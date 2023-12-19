import React from 'react'
import hoc from  './Hoc'
import { Link } from 'react-router-dom';
const Component2 = ({state, handler}) => {
    
  return (
    <>
    <h1>component 2 here</h1>
    <div onMouseEnter={handler}>
        Hover over this text to increment the counter <br />
        {state}
    </div>
    {/* <Link to="/">Click for /</Link> */}
    </>
  )
}

export default hoc(Component2);