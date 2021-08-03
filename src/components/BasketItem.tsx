import React from 'react'
import {IOrderItem} from "../interfaces";
import {useShopContext} from "../ShopContext";
import {ReactComponent as IconAdd} from '../static/iconAdd.svg'
import {ReactComponent as IconRemove} from '../static/iconRemove.svg'
import {ReactComponent as IconDelete} from '../static/iconDelete.svg'

export const BasketItem: React.FC<IOrderItem> = (props) => {

    const {
        mainId,
        displayName,
        itemPrice,
        orderQuantity,
    } = props;

    const {
        deleteOrderItem,
        addOrderQuantity,
        deleteOrderQuantity
    } = useShopContext();


    return (
        <li className="collection-item basket-item" id={mainId}>
            <span className="order-content">
            <span className="basket-item-name">{ displayName }, в количестве -</span>
            <span className="basket-quantity">
                <IconAdd
                    className="add-quantity"
                    onClick={ () => addOrderQuantity! (mainId) }
                />
                { orderQuantity }
                <IconRemove className="material-icons delete-quantity" onClick={ () => deleteOrderQuantity! (mainId) }/>,
            </span>
            <span className="basket-item-price">
                на сумму = { itemPrice * orderQuantity! } $
            </span>
            </span>

            <span className="removal-tool">
                <IconDelete
                    className="basket-item-delete"
                    onClick={ () => deleteOrderItem! (mainId) }
                />
            </span>
        </li>
    )
};