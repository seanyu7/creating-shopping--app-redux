import React from "react";

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt="This is a picture of what you want to buy" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}yen</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">+</button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">-</button>
      </div>
    </article>
  );
};

export default CartItem;
