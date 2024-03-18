import {types} from "./types";

export function changeTitleAction(){
    return{
        type: types.CHANGE_TITLE,
    }
}
export function changeTitleWithParamsAction(title){
    return{
        type: types.CHANGE_TITLE_WITH_PARAMS,
        payload: title,
    }
}
export function changeInputValueAction(value){
    return{
        type: types.CHANGE_INPUT_VALUE,
        payload: value,
    }
}
export function addUserAction(name){
    return{
        type: types.ADD,
        payload: name,
    }
}
export function deleteUsersAction(){
    return{
        type: types.DELETE,
    }
}
export function changeNumOneAction(value){
    return{
        type: types.CHANGE_NUM_ONE,
        payload: value,
    }
}
export function changeNumTwoAction(value){
    return{
        type: types.CHANGE_NUM_TWO,
        payload: value,
    }
}
export function makeResultAction(result){
    return{
        type: types.MAKE_RESULT,
        payload: result,
    }
}