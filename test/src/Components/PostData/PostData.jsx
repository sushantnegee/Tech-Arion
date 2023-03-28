import React, { useState } from 'react'
import './PostData.css'

const PostData = () => {
    const [data,setData] = useState({
        "email":"",
        "message":"",
        "name":"",
    })

    const handleChange=(e)=>{
        console.log("in handle change ")    
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value});
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
            fetch(" https://admin.srkprojects.com/web/api/client/v1/contact-us/",{
                method: "POST",
                headers :{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            .then((res)=>res.json())
            .then((D)=>{
                console.log('successfull posted data')
                console.log(D);
            }).catch((error)=>{
                console.log(error.message)
            })
    }

    console.log(data);
  return (
    <div>
        <form className='dataForm'>
            <input type = "email" name="email" placeholder='Enter Email' onChange={(e)=>handleChange(e)}/>
            <input type = "text" name="message" placeholder='Enter Message' onChange={(e)=>handleChange(e)}/>
            <input type = "text" name="name" placeholder='Enter Name' onChange={(e)=>handleChange(e)}/>
            <input onClick={(e)=>handleSubmit(e)} style={{width:"102%"}} type="submit"/>
        </form>
    </div>
  )
}

export default PostData