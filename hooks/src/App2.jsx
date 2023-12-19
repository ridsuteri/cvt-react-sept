import React,{useState, useMemo} from 'react'

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
        {count2}
        {counter}
        <button onClick={()=>{setCount2(++count2)}}>Click</button>
        <button onClick={()=>{setCounter(++counter)}}>Click for counter</button>
    </div>
  )
}

export default App2