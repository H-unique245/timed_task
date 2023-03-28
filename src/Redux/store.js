import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./appReducer";

const rootReducers= combineReducers(
    {
        app: appReducer
    }
)
export const store= legacy_createStore(rootReducers,applyMiddleware(thunk));