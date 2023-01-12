import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./features/shoppingCart/CartSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    },
});