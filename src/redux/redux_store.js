import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer, //тоже самое что и profileReducer: profileReducer
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
//thunk нужен для ассинхронных запросов
// pure function = data -> pure function -> return data
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;