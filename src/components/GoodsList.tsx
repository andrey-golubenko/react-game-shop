import React from 'react'
import {GoodsItem} from "./GoodsItem";
import {IGoodsListProps} from "../interfaces";


export const GoodsList: React.FC <IGoodsListProps> = (props) => {

    const { goods = [], addOrderItem } = props;

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
                        addOrderItem={ addOrderItem }
                    />
                })
            }
        </div>
    )
};