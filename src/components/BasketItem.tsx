import React from 'react'
import {IBasketItemProps} from "../interfaces";

export const BasketItem: React.FC<IBasketItemProps> = (props) => {

    const {
        mainId,
        displayName,
        itemPrice,
        orderQuantity,
        deleteOrderItem,
        addOrderQuantity,
        deleteOrderQuantity
    } = props;


    return (
        <li className="collection-item" id={mainId}>
            { displayName }, в количестве -
            <span className="basket-quantity">
                <i className="material-icons add-quantity" onClick={ () => addOrderQuantity (mainId) }>add_circle_outline</i>
                { orderQuantity }
                <i className="material-icons delete-quantity" onClick={ () => deleteOrderQuantity(mainId) }>remove_circle_outline</i>,
            </span>
            на сумму - { itemPrice * orderQuantity! } $
            <span className="secondary-content">
                <i className="material-icons basket-item-delete" onClick={ () => deleteOrderItem (mainId) }>close</i>
            </span>
        </li>
    )

};