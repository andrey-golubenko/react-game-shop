import React from 'react'
import {IGoods, IAddOrderItem} from "../interfaces";


export const GoodsItem: React.FC <IGoods & IAddOrderItem> = (props) => {

    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        addOrderItem = Function.prototype
    } = props;

    const itemImage = displayAssets[0] ;
    const itemPrice = price.finalPrice;

    return (
            <div className="card" id={ mainId }>
                <div className="card-image">
                    <img src={ itemImage.full_background }  alt=""/>
                </div>
                <div className="card-content">
                    <span className="card-title">{ displayName }</span>
                    <p>{ displayDescription }</p>
                </div>
                <div className="card-action">
                    <button
                        className="btn"
                        onClick={ () => addOrderItem({
                            mainId,
                            displayName,
                            itemPrice
                            } ) }
                    >Купить</button>
                    <span className="right">{ itemPrice } $</span>
                </div>
            </div>
    )
};