import React from 'react'
import {BasketItem} from "./BasketItem";
import {useShopContext} from "../ShopContext";

export const BasketList: React.FC = () => {

    const { order = [], handleBasketShow } = useShopContext();

    const totalPrice = order.reduce((sum, item) => sum + item.itemPrice * item.orderQuantity!, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active purple darken-1">Корзина</li>
            { order.length ? (
                    order.map(item =>
                        <BasketItem
                           key={item.mainId}
                           { ...item }
                        /> ) ) : (
                        <li className="collection-item">Корзина пуста!</li> ) }
            <li className="collection-item active purple darken-1 basket-bottom"><span>Общая стомость: { totalPrice } $</span><button className="btn btn-small purple darken-3 checkout-order">Оформить</button>
            </li>
            <i className="material-icons basket-close" onClick={ handleBasketShow }>close</i>
        </ul>
    )
};