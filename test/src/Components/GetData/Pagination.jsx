import React, { useState } from 'react'

const Pagination = ({total,page,setPage}) => {
    const previous = ()=> {
      setPage((prev)=>prev-1)
    }
    const next = ()=> {
      setPage((prev)=>prev+1)
    }

  return (<div style={{marginBottom:"10px"}}>
    <div style={{display:"flex",width:"20%", justifyContent:"space-around",alignItems:"center", margin:'auto',border:"2px solid grey",borderRadius:"5px"}}>
        
        <button style={{width:"40px",height:"40px",fontSize:"30px"}} onClick={previous} disabled={page<=0}>-</button>
        <h3>{page}</h3>
        <button style={{width:"40px",height:"40px",fontSize:"30px"}} onClick={next} disabled={page>=Math.ceil(total/10)}>+</button>
    </div>
    </div>
  )
}

export default Pagination