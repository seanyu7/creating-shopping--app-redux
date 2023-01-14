import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

//買い物かごの初期化について
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //crearcartっていうReducerを作っている。
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

console.log(cartSlice);
export default cartSlice.reducer;
