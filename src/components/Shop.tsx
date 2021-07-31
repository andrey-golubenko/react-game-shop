import React, {useEffect} from 'react'
import {Preloader} from './Preloader'
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {API_KEY, API_URL} from "../config";
import {Tooltip} from "./Tooltip";
import {useShopContext} from "../ShopContext";

export const Shop: React.FC = () => {
    const { setGoods,
            loading,
            isBasketShow,
            tooltipName
    } = useShopContext();

    useEffect(() => {
        fetch(API_URL, {
            headers : {
                'Authorization': API_KEY as string
            }
        })
            .then(response => response.json())
            .then(data => {
                setGoods!(data.shop);
            })
        // eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart />
            {
                loading ? <Preloader /> : <GoodsList />
            }
            {
                isBasketShow && <BasketList />
            }
            {
                tooltipName && <Tooltip />
            }
        </main>
    )
};