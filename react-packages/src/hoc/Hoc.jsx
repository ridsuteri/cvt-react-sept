import React, { useState } from 'react'

const hoc = (OriginalComponent) => {
  function ModifiedComponent(){
    let [counter, setCounter] = useState(0);

    const handler = ()=>{
        setCounter(++counter);
    }
    // it will do some optimization/add new stuff here....
    return <OriginalComponent state={counter} handler={handler} />
  }
  return ModifiedComponent;
}

export default hoc