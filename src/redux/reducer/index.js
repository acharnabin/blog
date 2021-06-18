import { combineReducers } from "redux";
import { addblogReducer } from "./addblogreducer";


export const rootReducer=combineReducers({
    addBlog:addblogReducer
})