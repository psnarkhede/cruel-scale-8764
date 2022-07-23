import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./Productapp/reducer";
import thunk from "redux-thunk";
import { questionreducer } from "./Question/reducer";
import { cartreducer } from "./Cartapp/reducer";
import { likereducer } from "./Likeapp/reducer";

const rootreducer = {
    productsreducer:reducer,
    question:questionreducer,
    cartreducer:cartreducer,
    likereducer:likereducer
}

export const store = legacy_createStore(combineReducers(rootreducer), applyMiddleware(thunk));
