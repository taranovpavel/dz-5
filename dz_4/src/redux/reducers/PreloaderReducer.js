import {types} from "../types";

const initialState ={
    preloader: false
}

export default function preloaderReducer(state = initialState, action){
    switch (action.type){
        case types.PRELOADER_ON:
            return{...state,preloader: false}
        case types.PRELOADER_OFF:
            return{...state,preloader: true}
        default: return state
    }
}