import React, {useEffect} from 'react'
import {useShopContext} from "../ShopContext";

export const Tooltip : React.FC = () => {

    const { tooltipName, closeTooltip } = useShopContext();

    useEffect(() => {
        const timerId = setTimeout(closeTooltip!, 3000);

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [tooltipName]);

    return ( <div id="toast-container" className="tooltip-container">
                <div className="toast">{tooltipName } добавлен в корзину</div>
             </div>
    )
};