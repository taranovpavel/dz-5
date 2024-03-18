import {types} from "../types"

const initialState = {
    num_one: 3,
    num_two: 3,
    result: 0,
}
export default function calculatorReducer(state = initialState, action){
    if (action.type === types.CHANGE_NUM_ONE){
        return {...state, num_one: action.payload*1}
    }else if (action.type === types.CHANGE_NUM_TWO){
        return {...state, num_two: action.payload*1}
    }else if(action.type === types.MAKE_RESULT){
        return {...state, result: action.payload}
    }
    return state
}