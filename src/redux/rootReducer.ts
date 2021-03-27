import {combineReducers} from "redux";
import * as pizzaReducer from "./pizzahut/pizzahut.reducer";
let rootReducer = combineReducers({
pizza : pizzaReducer.reducer
});

export default rootReducer;