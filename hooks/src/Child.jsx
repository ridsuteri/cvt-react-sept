import React, { useEffect } from 'react'

const Child = () => {
    // 4. useEffect at the phase of unmounting
    useEffect(()=>{
        // only trigger at the time of unmounting....
        return () => {
            console.log("unmounting....");
        };
    });

  return (
    <div>Child</div>
  )
}

export default Child