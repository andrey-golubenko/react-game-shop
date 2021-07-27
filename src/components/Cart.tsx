import React from 'react'
import {ICartProps} from "../interfaces";

export const Cart:React.FC <ICartProps>= (props) => {
    const { quantity = 0, basketShow } = props;

    return (
        <div
            className="cart blue darken-4 white-text"
            onClick={ basketShow }
        >
            <i className="material-icons">local_grocery_store</i>
            <span className="cart-quantity">{ quantity }</span>
        </div>

    )

};