import React from 'react'
import {GoodsItem} from "./GoodsItem";
import {useShopContext} from "../ShopContext";


export const GoodsList: React.FC = () => {

    const { goods = [] } = useShopContext();

    if (!goods.length) {
        return (
            <h3>Nothing find</h3>
        )
    }

    return (
        <div className="goods">
            {
                goods.map(good => {
                    return <GoodsItem
                        key={good.mainId}
                        {...good}
                    />
                })
            }
        </div>
    )
};