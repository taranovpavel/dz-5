import {types} from "../types"

const initialState = {
    value: "",
    users: [],
}

export default function userReducer(state = initialState,action){
    if (action.type === types.CHANGE_INPUT_VALUE){
        return {...state, value: action.payload}
    }else if(action.type === types.ADD){
        return {...state, users: [...state.users,action.payload], value: ""}
    }else if(action.type === types.DELETE){
        return {...state, users: [], value: ""}
    }
    return state
}