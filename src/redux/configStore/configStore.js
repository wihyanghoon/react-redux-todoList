import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({
    todo: todo, 
});
const store = createStore(rootReducer);

export default store;