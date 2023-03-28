import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{ height:"50px",display:'flex', justifyContent:"space-around", alignContent:"center",padding:'10px', border:"1px solid gray"}}>
        <Link to={'/counter'} ><button style={{height:"30px"}}>Counter</button></Link>
        <Link to={'/getdata'} ><button style={{height:"30px"}}>Get Data</button></Link>
        <Link to={'/postdata'} ><button style={{height:"30px"}}>Post Data</button></Link>
    </div>
  )
}

export default Nav