import React, { useCallback, useEffect, useState } from 'react'
import useMyHook from './useMyHook';
import Node from './Node';

const App3 = () => {
    let [count, setCount] = useState(0);
    let [parentState, setParentState] = useState(0);
    
    let countSetter = useCallback(()=>{
        let random = Math.random(); 
        // 0.0000000001 - 0.999999999
        // * 10 means - 0 - 9
        setCount(Math.ceil(random*10));
    },[])
    
    useMyHook('changed using custom hook');
    
  return (
    <div>
        <h1>Parent state: {parentState}</h1>
        <button onClick={()=>setParentState(++parentState)}>Click</button>
        <hr />
        <h3>Example of useCallback</h3>
        <Node count={count} countSetter={countSetter} />
    </div>
  )
}

export default App3