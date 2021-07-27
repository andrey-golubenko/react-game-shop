import React from 'react'
import {IBasketListProps} from '../interfaces'
import {BasketItem} from "./BasketItem";

export const BasketList: React.FC <IBasketListProps> = (props) => {

    const { order = [],
        basketShow,
        deleteOrderItem,
        addOrderQuantity,
        deleteOrderQuantity
    } = props;
    const totalPrice = order.reduce((sum, item) => sum + item.itemPrice * item.orderQuantity!, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active purple darken-1">Корзина</li>
            { order.length ? (
                    order.map(item =>
                        <BasketItem
                           key={item.mainId}
                           deleteOrderItem={ deleteOrderItem }
                           addOrderQuantity={ addOrderQuantity }
                           deleteOrderQuantity = { deleteOrderQuantity }
                           { ...item }
                        /> ) ) : (
                        <li className="collection-item">Корзина пуста!</li> ) }
            <li className="collection-item active purple darken-1 basket-bottom"><span>Общая стомость: { totalPrice } $</span><button className="btn btn-small purple darken-3 checkout-order">Оформить</button>
            </li>
            <i className="material-icons basket-close" onClick={ basketShow }>close</i>
        </ul>
    )
};