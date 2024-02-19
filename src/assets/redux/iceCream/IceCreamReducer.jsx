const initial={
    numOfIceCream:20
}

const iceCreamReducer=(state=initial,action)=>{
    switch(action.type)
    {
        case "BYE_ICECREAM":return{
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
        default:return state
    }
}
export default iceCreamReducer