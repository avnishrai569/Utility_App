import * as redux from "redux";
import { combineReducers } from "redux";
import { notesReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
const result = combineReducers({
     todoReducer,
     notesReducer
})

export const store = redux.createStore(result);

