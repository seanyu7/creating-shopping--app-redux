import React from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "../features/shoppingCart/CartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt="This is a picture of what you want to buy" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}yen</h4>
        <button className="remove-btn" onClick={()=>dispatch(removeItems(id))}>remove</button>
        
      </div>
      <div>
        <button className="amount-btn">+</button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">-</button>
      </div>
    </article>
  );
};
//Consoleに表示されているPayloadはデータのことを指しており、
//この場合だと親コンポーネント化らデータを読み込んでそれぞれUIに表示しているが、その中のどのデータに削除ボタンが反映されているのかについてわからないため、Idによって識別する。
export default CartItem;
