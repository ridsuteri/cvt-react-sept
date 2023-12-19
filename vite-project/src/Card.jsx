import React,{useState} from 'react'
import Children from './Children'
function Card(props) {

    let [rank, setRank] = useState(props.rank);

    const downgrade = ()=>{
       setRank(--rank);
       console.log(rank)
    }

    const upgrade = ()=>{
        setRank(++rank);
        console.log(rank)
    }
  return (
    <div>
        Rank: {rank} - {props.name}
        <button onClick={upgrade}>upgrade</button>
        <button onClick={downgrade}>downgrade</button>
        <Children data = {rank} setRank= {setRank} />
    </div>
  )
}

export default Card