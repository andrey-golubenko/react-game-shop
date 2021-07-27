import React, {useState, useEffect} from 'react'
import {Preloader} from './Preloader'
import {GoodsList} from "./GoodsList";
import {IGoods, IOrderItem} from '../interfaces'
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {API_KEY, API_URL} from "../config";
import {Tooltip} from "./Tooltip";

export const Shop: React.FC = () => {
    const [goods, setGoods]     = useState <IGoods[]> ([]);
    const [loading, setLoading] = useState <boolean>(true);
    const [order, setOrder]     = useState <IOrderItem[]>([]);
    const [isBasketShow, setBasketShoe] = useState <boolean>(false);
    const [toolTipName, setToolTipName] = useState <string>('');

    useEffect(() => {
        fetch(API_URL, {
            headers : {
                'Authorization': API_KEY as string
            }
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
    }, []);

    const addOrderItem = (item: IOrderItem) => {
        const itemIndex= order.findIndex(orderItem => orderItem.mainId === item.mainId);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                orderQuantity: 1
            };
            setOrder(prev =>[ ...prev, newItem ] );
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        orderQuantity: orderItem.orderQuantity! + 1
                    }
                } else {
                    return orderItem
                }
            });
            setOrder(newOrder)
        }
        setToolTipName(item.displayName)
    };

    const deleteOrderItem = (mainId: string) => {
        const newOrderSet = order.filter(elem => elem.mainId !== mainId);
        setOrder(newOrderSet);
    };

    const addOrderQuantity = (mainId: string) => {
        const newOrderItemQuantity = order.map(orderItem => {
            if (orderItem.mainId === mainId) {
                return {
                    ...orderItem,
                    orderQuantity: orderItem.orderQuantity! + 1
                }
            }
            return orderItem
        });
        setOrder(newOrderItemQuantity);
    };

    const deleteOrderQuantity = (mainId: string) => {
        const newOrderItemQuantity = order.map(orderItem => {
            if (orderItem.mainId === mainId && orderItem.orderQuantity! > 1) {
                return {
                    ...orderItem,
                    orderQuantity: orderItem.orderQuantity! - 1
                }
            }
            return orderItem
        });
        setOrder(newOrderItemQuantity);
    };

    const handleBasketShow = () => {
        setBasketShoe(prev => !prev);
    };

    const closeToolTip = () => {
        setToolTipName('')
    };

    return (
        <main className="container content">
            <Cart
                quantity={order.length}
                basketShow={ handleBasketShow }
            />
            {
                loading ? <Preloader /> :
                    <GoodsList
                        goods={ goods }
                        addOrderItem={ addOrderItem }
                    />
            }
            {
                isBasketShow && <BasketList
                             order={ order }
                             basketShow={ handleBasketShow }
                             deleteOrderItem = { deleteOrderItem }
                             addOrderQuantity = { addOrderQuantity }
                             deleteOrderQuantity = {deleteOrderQuantity}
                           />
            }
            {
                toolTipName && <Tooltip
                               name={ toolTipName }
                               closeToolTip={ closeToolTip }
                            />
            }
        </main>
    )
};