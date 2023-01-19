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
      //clearCartという名前のaction creatorを作っている。
      //state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
      //上記記述をすることによってState内でのcartItemsの値を空にすることができる。
    },
    removeItems: (state, action) => {
      //console.log(action);
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItems, increase } = cartSlice.actions;
//clearCartという名前のaction creatorをexportしている。
//action creatorをexportすることで、他のファイルから呼び出して、Dispatchすることで、Reducerを実行することができる。
export default cartSlice.reducer;
