import React,{useContext} from 'react'
import counterContext from './context'

const SubChild = () => {
    const counter = useContext(counterContext);
    console.log(counter);
  return (
    <div>SubChild</div>
  )
}

export default SubChild