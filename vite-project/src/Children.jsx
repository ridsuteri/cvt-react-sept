import React from 'react'

function Children({data, setRank}) {
  return (
    <div>
        {data}
        <button onClick={()=>(setRank(0))}>invoke the function received from parent component</button>
    </div>
  )
}

export default Children