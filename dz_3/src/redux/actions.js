import {types} from "./types";

export function asyncFunctionAction(){
    return function (){
        setTimeout(() =>{
            alert("hello")
        },2000)
    }
}
function getUserAction(users){
    return {
        type: types.USERS,
        payload: users,
    }
}
export function fetchUserAction(){
    return async function (dispatch) {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        dispatch(getUserAction(data))
    }
}
export function fetchUserInfoAction(id){
    return async function (dispatch){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getUserAction(data))
    }
}