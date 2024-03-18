import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import userReducer from "./userReducer";
import calculatorReducer from  "./calculatorReducer";
export const rootReducer = combineReducers({
    titleReducer,
    userReducer,
    calculatorReducer,
})