import React, {useEffect} from 'react'
import {ITooltipProps} from "../interfaces";

export const Tooltip : React.FC <ITooltipProps>= (props) => {

    const { name, closeToolTip } = props;

    useEffect(() => {
        const timerId = setTimeout(closeToolTip, 3000);

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [name]);

    return ( <div id="toast-container" className="tooltip-container">
                <div className="toast">{name } добавлен в корзину</div>
             </div>
    )
}