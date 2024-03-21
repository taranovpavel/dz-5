import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import userInfoReducer from "./userInfoReducer";
export const rootReducer = combineReducers({
    usersReducer,
    userInfoReducer,
})