import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/IceAction'
import { buyCake } from '../redux/cake/CakeAction'

const IceCream = () => {
    const num=useSelector((state)=>state.iceCream)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>IceCream-{num.numOfIceCream}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>byIceCream</button>
    </div>
  )
}

export default IceCream