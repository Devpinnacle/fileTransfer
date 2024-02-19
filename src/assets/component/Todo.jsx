import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Todo = () => {
    const [data,setData]=useState([]);
    const [val,setVal]=useState(null)
    const getData=async()=>{
        let x=await axios({
            method: 'post',
             url: 'http://localhost:3000/api/name/get_name',
        });
        setData(x.data)
    }
    getData()


    const addfun=()=>{
        const sndbkdata={
            name:val,
           }
        
           axios({
            method: 'post',
            url: 'http://localhost:3000/api/name/add_name',
            data: sndbkdata
          });
          setVal("");
    }

    const delfun=(id)=>{
        const sndbkdata1={
            id:id,
           }
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/name/del_name',
            data: sndbkdata1
          });    
    }

  return (
    <>     
        <input type='text' value={val}onChange={(e)=>setVal(e.target.value)}/>
        <input type='submit' value={'add'} onClick={()=>addfun()}/>
        {data.map((ele)=>{
            return(
                <>
                <div className='inline'><h1>{ele.name}</h1><input type='submit' value={'delete'} onClick={()=>delfun(ele._id)}/></div>
                </>
            )
        })}
    </>
  )
}

export default Todo