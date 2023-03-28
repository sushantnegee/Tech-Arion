import React, { useState } from 'react'

const Counter = () => {
    const [count,setcount] = useState(0)
    const increaseCount = ()=> {
      setcount((prev)=>prev+3)
    }
    const decreaseCount = ()=> {
      setcount((prev)=>prev-3)
    }

  return (<div style={{}}>
    <h1>Counter</h1>
    <div style={{display:"flex",width:"20%",height:"300px", justifyContent:"space-around",alignItems:"center", margin:'auto',border:"2px solid grey",borderRadius:"5px"}}>
        
        <button style={{width:"40px",height:"40px",fontSize:"30px"}} onClick={decreaseCount}>-</button>
        <h3>{count}</h3>
        <button style={{width:"40px",height:"40px",fontSize:"30px"}} onClick={increaseCount}>+</button>
    </div>
    </div>
  )
}

export default Counter