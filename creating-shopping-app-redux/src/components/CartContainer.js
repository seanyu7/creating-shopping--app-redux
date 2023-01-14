import React from "react";
import { useSelector } from "react-redux";
import cartItems from "../cartItems";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <selection className="cart">
        <header>
          <h2>Shopping Crat</h2>
          <h4 className="empty-cart">There are no Items in this Cart...</h4>
        </header>
      </selection>
    );
  }

  //ここまでは、カートに商品が入っていない場合の表示をしている。ここから下のコードは、カートに商品が入っている場合の表示をしている。
  //分岐を表示しなくともIF分を使うことによって、勝手に場合分けされるため、ELSE文は不要。
  return (
    <section>
      <header>
        <h2>Shopping Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item}/>;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">Clear Cart</button>
      </footer>
    </section>
  );
};
export default CartContainer;
