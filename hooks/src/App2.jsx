import React,{useState, useMemo} from 'react'
// contains example for useMemo
const App2 = () => {
  let [counter, setCounter] = useState(0);
  let [count2, setCount2] = useState(0);
  
  
  let complexCalculation = ()=>{
    console.log('we are performing a heavy calculation....')
  }
  
  useMemo(()=>{
    complexCalculation();
  },[counter])
   
  
  return (
    <div>
        Count (state1 ) : {count2} <br />
        Count2 (state2 ): {counter} <br />
        <button onClick={()=>{setCount2(++count2)}}>Click</button>
        <button onClick={()=>{setCounter(++counter)}}>Click for counter</button>
    </div>
  )
}

export default App2