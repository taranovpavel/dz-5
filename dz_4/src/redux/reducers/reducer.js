import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";
import registrationReducer from "./registrationReducer";
export const rootReducer=combineReducers({
    preloaderReducer,
    registrationReducer
})