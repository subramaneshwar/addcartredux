const initialState ={
    val: [],
    cartdet:[]
}
const reducer = (state = initialState,action)=>{
    if(action.type==='prod'){
        return {
            ...state,
            val : action.data
        }
    }
    if(action.type==='card'){

        const fil = state.val.filter(ele => ele.id === action.id)

        return {

            ...state,
            cartdet:[...state.cartdet,fil]
        }
    }
    if(action.type==='rem'){
        const fil = state.cartdet.filter((ele ,ind ) => ind !== action.rem)

        return {
            ...state,
            cartdet:fil
        }
    }
    return state
}
export default reducer