import React from 'react'
import {useShopContext} from "../ShopContext";
import {ReactComponent as ShoppingCart} from '../static/shoppingCart.svg'

export const Cart:React.FC = () => {

    const { order, handleBasketShow } = useShopContext();

    return (
        <div
            className="cart blue darken-4 white-text"
            onClick={ handleBasketShow }
        >
            <ShoppingCart className="shopping-cart-icon" />
            <span className="cart-quantity">{ order?.length }</span>
        </div>
    )
};