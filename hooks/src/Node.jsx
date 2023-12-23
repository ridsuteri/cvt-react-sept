import React,{memo} from 'react'

const Node = ({countSetter}) => {

    console.log('child is re rendering......')
  return (
    <div>
        {/* <p>Count value received : {count}</p> */}
        <button onClick={countSetter} >Click to SetCount</button>
    </div>
  )
}

export default memo(Node)