import {combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage: storage
}

const reducer = combineReducers({
    cart: cartReducer,
    user: userReducer
});

export default persistReducer(persistConfig, reducer)