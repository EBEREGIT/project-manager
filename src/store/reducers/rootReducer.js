import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// combine the reducers here
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;