import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction';

const Cake2 = () => {
    const {numOfCakes, count }= useSelector((state) => state.cake)
    const dispatch = useDispatch();
    const [num,setNum]=useState(1)
  return (
    <div>
    <h2>No of Cake-{numOfCakes}</h2><input type='number' value={num} onChange={(e)=>setNum(e.target.value)}/>
    <button onClick={() => dispatch(buyCake(num))}>Buy cake</button>
    </div>
  )
}

export default Cake2