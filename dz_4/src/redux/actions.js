import { types } from "./types"

export function preloaderOn(){
    return{
        type: types.PRELOADER_ON
    }
}
export function preloaderOff(){
    return{
        type: types.PRELOADER_OFF
    }
}
export function addUserAction(user){
    return async function (dispatch){
        dispatch(preloaderOn())
        const option = {
            method: "POST",
            headers:{
                "Content-Type":'application'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch("",option)
        if (response >= 200 || response.status <= 204){
            dispatch(preloaderOff())
            alert("все правильно")
        }
    }
}