import React, {useEffect, Suspense} from 'react'
import {Preloader} from './Preloader'
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {API_KEY, API_URL} from "../config";
import {Tooltip} from "./Tooltip";
import {useShopContext} from "../ShopContext";

const BasketList = React.lazy(() => import("./BasketList"))  ;

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

    const mainClasses = ["container content"];
    if (loading){
        mainClasses.push("full-height")
    }

    return (
        <main className={mainClasses.join(' ')} >
            <Cart />
            {
                loading ? <Preloader /> : <GoodsList />
            }
            {
                isBasketShow &&
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <BasketList />
                    </Suspense>
            }
            {
                tooltipName && <Tooltip />
            }
        </main>
    )
};