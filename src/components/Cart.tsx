import React from 'react'
import {useShopContext} from "../ShopContext";

export const Cart:React.FC = () => {

    const { order, handleBasketShow } = useShopContext();

    return (
        <div
            className="cart blue darken-4 white-text"
            onClick={ handleBasketShow }
        >
            <i className="material-icons">local_grocery_store</i>
            <span className="cart-quantity">{ order?.length }</span>
        </div>
    )
};