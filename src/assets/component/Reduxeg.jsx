import React, { useState } from 'react'

const reduxeg = () => {
    const [data,setData]=useState(1);
    const decrement=()=>{
        setData(prevData=>prevData-1)
    }
    const increment=()=>{
        setData(data+1)
    }

  return (
    <div style={{display:'flex'}}>
        <input type='submit' value={'-'} onClick={decrement}/>
        <input type='number' value={data}/>
        <input type='submit' value={'+'} onClick={increment}/>
    </div>
  )
}

export default reduxeg