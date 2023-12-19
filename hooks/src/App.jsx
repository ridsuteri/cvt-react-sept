import { useEffect,useState } from 'react'
import Child from './Child';

function App() {
  // useEffect(function, [dependency array])
  let [count, setCounter] = useState(0);
  let [count2, setCounter2] = useState(0);
  let [visible, setVisible] = useState(true);

  // 1. it will run for all lifecycle phase - mouting, updation, unmounting....
  // useEffect(()=>{
  //   console.log('useEffect is running');
  // })

  // 2. run it only for mouting
  // useEffect(()=>{
  //     console.log('useEffect is running');
  // },[]);


  // 3. run it only on updation part
  // useEffect(()=>{
  //       console.log('useEffect is running');
  // },[count]);
  
  return (
    <div>
      {/* <h3 >{count}</h3>
      <button onClick={()=>setCounter(++count)}>update count</button>
      <h3 >{count2}</h3>
      <button onClick={()=>setCounter2(++count2)}>update count2</button> */}
      <h3>Click btn to toggle child component</h3>
      <button onClick={()=>{setVisible(!visible)}}>Toggle</button>
      {visible && <Child/>}
    </div>
  )
}

export default App
