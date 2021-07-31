import React from 'react'
import {IGoods} from "../interfaces";
import {useShopContext} from "../ShopContext";

export const GoodsItem: React.FC <IGoods > = (props) => {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
    } = props;

    const itemImage = displayAssets[0] ;
    const itemPrice = price.finalPrice;

    const { addOrderItem } = useShopContext();

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
                        onClick={ () => addOrderItem!({
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