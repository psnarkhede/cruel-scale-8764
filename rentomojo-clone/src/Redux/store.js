import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./Productapp/reducer";
import thunk from "redux-thunk";
import { questionreducer } from "./Question/reducer";

const rootreducer = {
    productsreducer:reducer,
    question:questionreducer
}

export const store = legacy_createStore(combineReducers(rootreducer), applyMiddleware(thunk));
