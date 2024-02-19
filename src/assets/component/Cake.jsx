import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction';

function Cake() {
    const {numOfCakes, count }= useSelector((state) => state.cake)
    const dispatch = useDispatch();
    // console.log("numOfCakes",cake)
    return (
        <div>
            <h2>No of Cake-{numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    );
}

export default Cake;
