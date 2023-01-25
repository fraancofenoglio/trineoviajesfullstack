import {legacy_createStore as createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import reducer from "../reducers";

const initialState = {};
const middleware = [];

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export const persistor = persistStore(store);

