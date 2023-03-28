import React, { useEffect, useState } from 'react'
import GetDataCard from './GetDataCard';
import Pagination from './Pagination';

const GetData = () => {
    const [data,setData] = useState([]);
    const [total,setTotal] = useState();
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false);
    // const [limit,setLimit] = useState();

    const fetchData = (page)=>{
        setLoading(true);
        fetch(`https://gorest.co.in/public/v1/todos?page=${page}`)
        .then((res)=>res.json())
        .then((data)=>{
            const pagination = data.meta.pagination;
            setData(data.data)
            setTotal(pagination.total)
            setTimeout(()=>{
                setLoading(false)
            },2000)
        }).catch((error)=>{
            console.log(error.message)
            setTimeout(()=>{
                setLoading(false)
            },2000)
        })
    }
    useEffect(()=>{
        fetchData(page);
    },[page])
  return (
    <div style={{padding:"40px"}}>
    {!loading?<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
        {data.map((todo)=>(
            <GetDataCard title={todo.title} due_on={todo.due_on} status={todo.status}/>
            ))}
    </div>:<img src='https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'/>}
            <Pagination total={total} page={page} setPage={setPage}/>
    </div>
  )
}

export default GetData