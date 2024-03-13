const initialState = {
    count: 0
}
export default function reducer (state = initialState, action){
    if (action.type === "MINUS_10"){
        return {...state, count: action.payload}
    }else if(action.type === "MINUS_1"){
        return {...state, count: action.payload}
    }else if(action.type === "RESET"){
        return {...state, count: action.payload}
    }else if(action.type === "PLUS_1"){
        return {...state, count: action.payload}
    }else if(action.type === "PLUS_10"){
        return { count: action.payload}
    }
    return state
}