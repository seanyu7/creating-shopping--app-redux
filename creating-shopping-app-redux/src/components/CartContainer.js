import React from "react";
import {useSelector} from "react-redux";

const CartContainer = () => {
    const {amount} = useSelector((state) => state.cart);
  if (amount < 1) {
    return(
        <selection className = "cart">
            <header>
                <h2>Shopping Crat</h2>
                <h4 className="empty-cart">There are no Items in this Cart...</h4>
            </header>
        </selection>
    )
  }
};

export default CartContainer;
