import {types} from "../types";

const initialState = {
    title: "",
}

export default function titleReducer(state = initialState, action){
    if (action.type === types.CHANGE_TITLE){
        return {...state, title: "hello geeks"}
    }else if(action.type === types.CHANGE_TITLE_WITH_PARAMS){
        return {...state, title: action.payload}
    }
    return state
}