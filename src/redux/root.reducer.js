import UserReducer from "./user/user.reducer";
import CartReducer from "../redux/cart/cart.reducer";
import ShopeReducer from '../redux/Shop/shopReducer'
import storage from 'redux-persist/lib/storage';

import DirectoryReducer from '../redux/directory/directoryReducer'
import {persistReducer } from 'redux-persist';
import {combineReducers } from "redux";

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
  }
const rootReducer= combineReducers({
    users: UserReducer,
    cart:CartReducer,
    directory:DirectoryReducer,
    shop:ShopeReducer
});
export default persistReducer(persistConfig,rootReducer);