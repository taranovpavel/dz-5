import {types} from "../types"

const initialState = {
    user: {},
}

export default function userInfoReducer(state = initialState, action){
    switch (action.type){
        case types.USERS:
            return {...state, user: action.payload}
        default: return state
    }
}