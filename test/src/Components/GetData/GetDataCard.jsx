import React from 'react'

const GetDataCard = ({title,due_on,status}) => {
  return (
    <div>
    <div style={{border:"2px solid gray",}}>
        <h4>Title: {title}</h4>
        <h4>Due on : {due_on}</h4>
        <h4>Status :{status}</h4>
    </div>
    </div>
  )
}

export default GetDataCard